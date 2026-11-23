# -*- coding: utf-8 -*-
"""
Block parser module for the Unified Media Guide (11-Part Executive Architecture).
Provides block parsing, inline formatting, and custom SVG icons for each part.
"""
import sys
import os
import re
import json
import html

if sys.stdout.encoding != 'utf-8':
    sys.stdout.reconfigure(encoding='utf-8')

# Custom SVG Icons for the 11 Executive Parts + Intro
ICONS = {
    "intro": '''<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>''',
    
    # 1. التأسيس والهيكل التنظيمي (Building / Landmark)
    1: '''<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="21" x2="21" y2="21"/><line x1="4" y1="10" x2="20" y2="10"/><polyline points="12 3 2 10 22 10 12 3"/><line x1="6" y1="10" x2="6" y2="21"/><line x1="10" y1="10" x2="10" y2="21"/><line x1="14" y1="10" x2="14" y2="21"/><line x1="18" y1="10" x2="18" y2="21"/></svg>''',
    
    # 2. التخطيط والتحضير (Clipboard / Map / Calendar)
    2: '''<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><path d="m9 16 2 2 4-4"/></svg>''',
    
    # 3. الإنتاج المرئي والمسموع (Camera / Film)
    3: '''<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/><circle cx="8.5" cy="12" r="2.5"/></svg>''',
    
    # 4. التصميم والهوية البصرية (Palette / Vector)
    4: '''<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>''',
    
    # 5. المحتوى وصوت الاتحاد والنشر (Send / Megaphone / Broadcast)
    5: '''<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/><path d="M11 13l-4 4"/></svg>''',
    
    # 6. الملفات والأرشفة الرقمية (Server / Database / Archive)
    6: '''<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>''',
    
    # 7. السلوك المهني ومعايير الجودة (Award / Badge / Quality)
    7: '''<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>''',
    
    # 8. الحقوق والخصوصية وحماية البيانات (Shield Lock / Privacy)
    8: '''<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><rect x="9" y="11" width="6" height="5" rx="1"/><path d="M10 11V9a2 2 0 0 1 4 0v2"/></svg>''',
    
    # 9. الطوارئ وإدارة الأزمات (Alert Triangle / Siren)
    9: '''<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>''',
    
    # 10. التطوير والتدريب وبناء القدرات (Rocket / Graduation)
    10: '''<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>''',
    
    # 11. الملاحق والنماذج التشغيلية (File Checklist / Documents)
    11: '''<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="m9 15 2 2 4-4"/><line x1="8" y1="11" x2="16" y2="11"/></svg>'''
}

def clean_inline(text):
    text = re.sub(r'\*\*(.+?)\*\*', r'<strong>\1</strong>', text)
    text = re.sub(r'\*(.+?)\*', r'<em>\1</em>', text)
    text = text.replace('«', '<span class="quote-mark">«</span><span class="quote-text">')
    text = text.replace('»', '</span><span class="quote-mark">»</span>')
    return text

def parse_blocks(text, ch_idx=0, sec_id=""):
    """
    Parses a markdown block containing paragraphs, subheadings, bullet lists, numbered lists, checklists, and code blocks.
    """
    lines = text.strip().split('\n')
    output = []
    
    i = 0
    n = len(lines)
    
    while i < n:
        line = lines[i].strip()
        
        if not line:
            i += 1
            continue

        # Code block / Tree: ``` ... ```
        if line.startswith('```'):
            code_lines = []
            i += 1
            while i < n and not lines[i].strip().startswith('```'):
                code_lines.append(html.escape(lines[i]))
                i += 1
            if i < n and lines[i].strip().startswith('```'):
                i += 1
            output.append(f'<pre class="code-tree-block"><code>{"<br>".join(code_lines)}</code></pre>')
            continue
            
        # H3: ### ...
        if line.startswith('### '):
            h3_title = line[4:].strip()
            output.append(f'<div class="eval-section-block"><div class="eval-block-title">{clean_inline(h3_title)}</div></div>')
            i += 1
            continue

        # Checklist item: - [ ] ...
        if line.startswith('- [ ] ') or line.startswith('- [x] '):
            checklist_items = []
            while i < n and (lines[i].strip().startswith('- [ ] ') or lines[i].strip().startswith('- [x] ')):
                c_line = lines[i].strip()
                is_checked = c_line.startswith('- [x] ')
                item_text = c_line[6:].strip()
                checklist_items.append((is_checked, item_text))
                i += 1
                
            output.append('<div class="checklist-container">')
            for c_idx, (chk, itxt) in enumerate(checklist_items):
                chk_id = f"chk_{sec_id}_{c_idx}_{i}"
                checked_attr = 'checked' if chk else ''
                output.append(f'''<label class="checklist-item" for="{chk_id}">
  <input type="checkbox" id="{chk_id}" class="checklist-checkbox" {checked_attr} onchange="updateChecklistProgress()">
  <span class="checklist-box"></span>
  <span class="checklist-label-text">{clean_inline(itxt)}</span>
</label>''')
            output.append('</div>')
            continue

        # Bullet list: - ...
        if line.startswith('- '):
            bullet_items = []
            while i < n and lines[i].strip().startswith('- '):
                b_line = lines[i].strip()
                if b_line.startswith('- [ ] ') or b_line.startswith('- [x] '):
                    break
                bullet_items.append(b_line[2:].strip())
                i += 1
                
            if bullet_items:
                output.append('<ul class="bullet-list">')
                for b_item in bullet_items:
                    output.append(f'<li>{clean_inline(b_item)}</li>')
                output.append('</ul>')
            continue

        # Numbered list: 1. ... or 10. ...
        num_match = re.match(r'^(\d+)\.\s+(.*)$', line)
        if num_match:
            numbered_items = []
            while i < n:
                curr_line = lines[i].strip()
                curr_match = re.match(r'^(\d+)\.\s+(.*)$', curr_line)
                if curr_match:
                    numbered_items.append((curr_match.group(1), curr_match.group(2)))
                    i += 1
                else:
                    break
                    
            output.append('<ol class="executive-numbered-list">')
            for num_str, n_item in numbered_items:
                output.append(f'''<li class="num-item">
  <span class="num-badge">{num_str}</span>
  <div class="num-content">{clean_inline(n_item)}</div>
</li>''')
            output.append('</ol>')
            continue

        # Standalone bold category (e.g. **أ. تغطية محدودة**)
        cat_match = re.match(r'^\*\*([^\*]+)\*\*$', line)
        if cat_match:
            output.append(f'<div class="category-header-pill">{clean_inline(cat_match.group(1))}</div>')
            i += 1
            continue

        # Callout detection for special rules
        p_text = line
        i += 1
        while i < n and lines[i].strip() and not lines[i].strip().startswith(('#', '-', '1.', '2.', '3.', '4.', '5.', '6.', '7.', '8.', '9.', '```')) and not re.match(r'^\*\*([^\*]+)\*\*$', lines[i].strip()):
            p_text += ' ' + lines[i].strip()
            i += 1
            
        p_clean = clean_inline(p_text)
        
        # Check if it's a prohibition warning or strict rule
        if any(w in p_text for w in ["لا يجوز", "يحظر", "تجنب", "عدم إهمال", "عدم تداول", "يُمنع منعاً باتاً"]):
            output.append(f'''<div class="callout-card callout-warning">
  <div class="callout-icon">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
  </div>
  <div class="callout-text">{p_clean}</div>
</div>''')
        elif any(w in p_text for w in ["يجب أن", "متطلبات أساسية", "يلتزم المصمم", "تسري التوجيهات", "[إلزامي]"]):
            output.append(f'''<div class="callout-card callout-mandatory">
  <div class="callout-icon">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
  </div>
  <div class="callout-text">{p_clean}</div>
</div>''')
        else:
            output.append(f'<p>{p_clean}</p>')

    return '\n'.join(output)
