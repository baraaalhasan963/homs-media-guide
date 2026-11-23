# -*- coding: utf-8 -*-
"""
Main Generator for the Official Media Guide HTML (Tabbed 11-Part Executive Architecture).
Converts the manual into a high-end, responsive tabbed portal where each part has its dedicated tab,
with full instant search across all tabs, automated tab-switching, deep-linking, smooth navigation,
and complete print-to-PDF support for the whole manual.
"""
import sys
import os
import re
import json
import html

if sys.stdout.encoding != 'utf-8':
    sys.stdout.reconfigure(encoding='utf-8')

import block_parser
from block_parser import ICONS, clean_inline, parse_blocks

with open('parsed_structure.json', 'r', encoding='utf-8') as f:
    doc = json.load(f)

parts_data = doc.get('parts', doc.get('chapters', []))

# Stylesheet & Assets
CSS_STYLES = '''
    /* ==========================================================================
       الهوية البصرية الرسمية لاتحاد الطلبة - جامعة حمص
       الألوان الأساسية: زيتي داكن وقور (#15413A)، ذهبي ملكي معتمد (#C59B27)، عاجي (#FCFAF6)
       ========================================================================== */
    :root {
      --olive-dark: #15413A;
      --olive-deep: #0D2B26;
      --olive-mid: #1C544B;
      --olive-light: #2C6E63;
      --olive-subtle: #EDF4F2;
      
      --gold-primary: #C59B27;
      --gold-deep: #9F7918;
      --gold-light: #DFB847;
      --gold-pale: #FDF9EE;
      --gold-gradient: linear-gradient(135deg, #DFB847 0%, #C59B27 50%, #9F7918 100%);
      --gold-border: rgba(197, 155, 39, 0.35);

      --union-red: #C61E1D;
      --union-orange: #E85A18;

      --bg-page: #F6F8F7;
      --surface-white: #FFFFFF;
      --surface-ivory: #FCFAF6;
      --surface-muted: #F2F5F4;
      
      --text-main: #142824;
      --text-muted: #4B635E;
      --text-subtle: #7A938E;
      --text-on-dark: #FFFFFF;

      --border-light: 1px solid rgba(21, 65, 58, 0.12);
      --border-accent: 1px solid rgba(197, 155, 39, 0.28);
      
      --shadow-sm: 0 2px 6px rgba(21, 65, 58, 0.05);
      --shadow-md: 0 8px 24px rgba(21, 65, 58, 0.08);
      --shadow-lg: 0 16px 40px rgba(21, 65, 58, 0.12);

      --radius-sm: 6px;
      --radius-md: 12px;
      --radius-lg: 18px;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      font-family: 'Cairo', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      background-color: var(--bg-page);
      color: var(--text-main);
      line-height: 1.88;
      font-size: 14.5px;
      font-weight: 500;
      letter-spacing: normal;
      overflow-x: hidden;
      text-rendering: optimizeLegibility;
      direction: rtl;
      text-align: right;
    }

    h1, h2, h3, h4, h5, h6 {
      font-family: 'Cairo', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      font-weight: 800;
      color: var(--olive-deep);
    }

    strong, b {
      font-weight: 700;
      color: var(--olive-deep);
    }

    p {
      line-height: 1.88;
      font-size: 14.5px;
      font-weight: 500;
      color: #1F3430;
      text-align: justify;
      text-justify: inter-word;
      margin-bottom: 14px;
    }

    p:last-child {
      margin-bottom: 0;
    }

    /* Scroll progress bar */
    #progress-bar {
      position: fixed;
      top: 0;
      left: 0;
      height: 3.5px;
      background: var(--gold-gradient);
      width: 0%;
      z-index: 10000;
      transition: width 0.1s ease;
    }

    /* ==========================================================================
       الشريط القيادي العلوي (Top Executive Bar)
       ========================================================================== */
    .executive-topbar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      width: 100%;
      box-sizing: border-box;
      z-index: 1000;
      background: rgba(21, 65, 58, 0.98);
      backdrop-filter: blur(14px);
      border-bottom: 2px solid var(--gold-primary);
      padding: 12px 36px;
      min-height: 72px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: var(--surface-white);
    }

    .topbar-brand {
      display: flex;
      align-items: center;
      gap: 16px;
      text-decoration: none;
      color: inherit;
    }

    .topbar-logo {
      height: 44px;
      width: auto;
      filter: drop-shadow(0 2px 4px rgba(0,0,0,0.25));
    }

    .topbar-title-block {
      display: flex;
      flex-direction: column;
    }

    .topbar-org {
      font-size: 11px;
      font-weight: 700;
      color: var(--gold-light);
      letter-spacing: 0.5px;
    }

    .topbar-doc-name {
      font-size: 14.5px;
      font-weight: 800;
      color: var(--surface-white);
    }

    .topbar-center-title {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      font-size: 14px;
      font-weight: 700;
      color: rgba(255, 255, 255, 0.9);
      letter-spacing: 0.3px;
      white-space: nowrap;
      pointer-events: none;
    }

    .topbar-actions {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .btn-action {
      display: inline-flex;
      align-items: center;
      gap: 7px;
      padding: 7px 14px;
      font-size: 13px;
      font-weight: 700;
      font-family: inherit;
      border-radius: var(--radius-sm);
      cursor: pointer;
      text-decoration: none;
      transition: all 0.2s ease;
      border: 1px solid transparent;
    }

    .btn-search {
      background: rgba(255, 255, 255, 0.12);
      color: #FFFFFF;
      border: 1px solid rgba(197, 155, 39, 0.45);
    }

    .btn-search:hover {
      background: rgba(197, 155, 39, 0.22);
      border-color: var(--gold-light);
    }

    .btn-print {
      background: var(--gold-gradient);
      color: var(--olive-deep);
      border: 1px solid var(--gold-light);
      box-shadow: 0 2px 8px rgba(197, 155, 39, 0.3);
    }

    .btn-print:hover {
      filter: brightness(1.08);
      transform: translateY(-1px);
    }

    .btn-drawer {
      background: rgba(255, 255, 255, 0.12);
      color: #FFFFFF;
      border: 1px solid rgba(255, 255, 255, 0.25);
    }

    .btn-drawer:hover {
      background: rgba(255, 255, 255, 0.2);
    }

    /* ==========================================================================
       شريط التابات التفاعلي الأفقي (Executive Sticky Tabs Bar)
       ========================================================================== */
    .tabs-nav-sticky-wrapper {
      position: sticky;
      top: 72px;
      left: 0;
      right: 0;
      width: 100%;
      background: #FFFFFF;
      border-bottom: 2px solid rgba(21, 65, 58, 0.12);
      box-shadow: 0 4px 16px rgba(21, 65, 58, 0.05);
      z-index: 980;
      transition: top 0.2s ease;
    }

    .tabs-nav-container {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 8px 18px;
      overflow-x: auto;
      scrollbar-width: none;
      -ms-overflow-style: none;
    }

    .tabs-nav-container::-webkit-scrollbar {
      display: none;
    }

    .tab-btn {
      display: inline-flex;
      align-items: center;
      gap: 7px;
      padding: 8px 14px;
      font-size: 13px;
      font-weight: 700;
      font-family: inherit;
      color: var(--olive-dark);
      background: var(--surface-ivory);
      border: 1px solid rgba(21, 65, 58, 0.12);
      border-radius: 8px;
      cursor: pointer;
      white-space: nowrap;
      transition: all 0.2s cubic-bezier(0.2, 0.8, 0.2, 1);
      flex-shrink: 0;
    }

    .tab-btn svg {
      width: 16px;
      height: 16px;
      color: var(--gold-deep);
      transition: color 0.2s ease;
    }

    .tab-btn:hover {
      background: var(--gold-pale);
      border-color: var(--gold-primary);
      color: var(--gold-deep);
      transform: translateY(-1px);
    }

    .tab-btn.active {
      background: var(--olive-dark);
      color: #FFFFFF;
      border-color: var(--olive-dark);
      box-shadow: 0 4px 12px rgba(21, 65, 58, 0.25);
    }

    .tab-btn.active svg {
      color: var(--gold-light);
    }

    .tab-btn-pill {
      font-size: 11px;
      padding: 1px 6px;
      border-radius: 10px;
      background: rgba(255, 255, 255, 0.2);
      font-weight: 800;
    }

    .tab-btn:not(.active) .tab-btn-pill {
      background: rgba(21, 65, 58, 0.08);
      color: var(--olive-dark);
    }

    /* ==========================================================================
       حاوية الوثيقة الرسمية والتابات (Tabbed Document Container)
       ========================================================================== */
    .document-wrapper {
      max-width: 1080px;
      margin: 28px auto 60px auto;
      padding: 0 18px;
    }

    .official-paper {
      background: var(--surface-white);
      border-radius: var(--radius-md);
      box-shadow: var(--shadow-lg);
      border: 1px solid rgba(21, 65, 58, 0.1);
      position: relative;
      overflow: hidden;
      min-height: 600px;
    }

    .watermark-emblem {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 650px;
      height: 650px;
      opacity: 0.022;
      pointer-events: none;
      z-index: 0;
    }

    .content-body {
      position: relative;
      z-index: 1;
      padding: 44px 54px;
    }

    /* Tab Panes */
    .tab-pane {
      display: none;
      opacity: 0;
      transition: opacity 0.25s ease-in-out;
    }

    .tab-pane.active {
      display: block;
      opacity: 1;
      animation: tabFadeIn 0.25s cubic-bezier(0.2, 0.8, 0.2, 1);
    }

    @keyframes tabFadeIn {
      from {
        opacity: 0;
        transform: translateY(6px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* Tab Footer Navigation */
    .tab-footer-nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 48px;
      padding-top: 24px;
      border-top: 2px dashed rgba(21, 65, 58, 0.12);
      gap: 16px;
    }

    .tab-nav-jump-btn {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 12px 22px;
      background: var(--surface-ivory);
      border: 1px solid rgba(21, 65, 58, 0.15);
      border-radius: 8px;
      color: var(--olive-dark);
      font-size: 13.5px;
      font-weight: 800;
      cursor: pointer;
      transition: all 0.2s ease;
      text-decoration: none;
    }

    .tab-nav-jump-btn:hover {
      background: var(--gold-pale);
      border-color: var(--gold-primary);
      color: var(--gold-deep);
      transform: translateY(-1px);
    }

    .tab-nav-jump-btn.next-btn {
      background: var(--olive-dark);
      color: #FFFFFF;
      border-color: var(--olive-dark);
      margin-right: auto;
    }

    .tab-nav-jump-btn.next-btn:hover {
      background: var(--olive-deep);
      color: var(--gold-light);
    }

    .tab-nav-jump-btn.prev-btn {
      margin-left: auto;
    }

    @media (max-width: 900px) {
      .content-body {
        padding: 28px 18px;
      }
      .executive-topbar {
        position: static;
        padding: 12px 16px;
        min-height: auto;
        flex-wrap: wrap;
      }
      .tabs-nav-sticky-wrapper {
        top: 0;
      }
      .topbar-center-title {
        display: none;
      }
      .document-wrapper {
        margin: 16px auto;
      }
      .tab-footer-nav {
        flex-direction: column;
        align-items: stretch;
      }
      .tab-nav-jump-btn {
        justify-content: center;
      }
    }

    /* ==========================================================================
       قسم غلاف الوثيقة (Cover Section Component)
       ========================================================================== */
    .cover-section {
      border-bottom: 2px solid var(--olive-subtle);
      padding-bottom: 40px;
      margin-bottom: 40px;
      position: relative;
    }

    .cover-header-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 20px;
      border-bottom: 1px solid rgba(21, 65, 58, 0.12);
      margin-bottom: 30px;
    }

    .gov-hierarchy {
      font-size: 13px;
      font-weight: 700;
      color: var(--olive-dark);
      line-height: 1.6;
    }

    .gov-hierarchy span {
      display: block;
      color: var(--gold-deep);
      font-weight: 800;
      font-size: 14px;
    }

    .cover-logo-img {
      height: 78px;
      width: auto;
      object-fit: contain;
    }

    .cover-badge-row {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 18px;
      flex-wrap: wrap;
    }

    .badge-status {
      background: var(--olive-dark);
      color: var(--gold-light);
      padding: 5px 14px;
      border-radius: var(--radius-sm);
      font-size: 12px;
      font-weight: 800;
      border: 1px solid var(--gold-border);
    }

    .badge-ref {
      background: var(--gold-pale);
      color: var(--gold-deep);
      border: 1px solid var(--gold-border);
      padding: 5px 14px;
      border-radius: var(--radius-sm);
      font-size: 12px;
      font-weight: 800;
    }

    .badge-version {
      background: #F0F4F8;
      color: #2D4A60;
      border: 1px solid rgba(45, 74, 96, 0.2);
      padding: 5px 14px;
      border-radius: var(--radius-sm);
      font-size: 12px;
      font-weight: 700;
    }

    .cover-main-title {
      font-size: 30px;
      font-weight: 900;
      color: var(--olive-deep);
      line-height: 1.35;
      margin-bottom: 12px;
    }

    .cover-sub-title {
      font-size: 16px;
      color: var(--text-muted);
      font-weight: 600;
      line-height: 1.7;
      margin-bottom: 24px;
    }

    .cover-accent-line {
      height: 4px;
      width: 140px;
      background: var(--gold-gradient);
      border-radius: 2px;
      margin-bottom: 28px;
    }

    .cover-meta-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 16px;
      background: var(--surface-ivory);
      border: 1px solid rgba(197, 155, 39, 0.25);
      border-radius: var(--radius-md);
      padding: 22px;
      position: relative;
    }

    .cover-meta-grid::before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      width: 4px;
      background: var(--gold-primary);
      border-radius: 0 var(--radius-md) var(--radius-md) 0;
    }

    .meta-item-label {
      font-size: 11.5px;
      font-weight: 800;
      color: var(--gold-deep);
      text-transform: uppercase;
      margin-bottom: 4px;
    }

    .meta-item-value {
      font-size: 13.5px;
      font-weight: 700;
      color: var(--olive-dark);
      line-height: 1.55;
    }

    /* Key Metrics Highlights */
    .metrics-ribbon {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 14px;
      margin: 32px 0 10px 0;
    }

    @media (max-width: 768px) {
      .metrics-ribbon {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    .metric-pill {
      background: rgba(21, 65, 58, 0.035);
      border: 1px solid rgba(21, 65, 58, 0.1);
      border-radius: 10px;
      padding: 14px;
      text-align: center;
      transition: all 0.2s ease;
    }

    .metric-pill:hover {
      border-color: var(--gold-primary);
      background: var(--gold-pale);
    }

    .metric-number {
      font-size: 24px;
      font-weight: 900;
      color: var(--olive-dark);
      line-height: 1;
      margin-bottom: 4px;
    }

    .metric-label {
      font-size: 12px;
      font-weight: 700;
      color: var(--text-muted);
    }

    /* ==========================================================================
       فهرس الأبواب التفاعلي (Table of Contents Grid)
       ========================================================================== */
    .toc-section {
      background: var(--olive-subtle);
      border: 1px solid rgba(21, 65, 58, 0.14);
      border-radius: var(--radius-md);
      padding: 26px 28px;
      margin-bottom: 36px;
    }

    .toc-title-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    }

    .toc-title {
      font-size: 19px;
      font-weight: 800;
      color: var(--olive-deep);
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .toc-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 14px;
    }

    .toc-card {
      background: var(--surface-white);
      border: 1px solid rgba(21, 65, 58, 0.1);
      border-radius: 10px;
      padding: 16px 18px;
      text-decoration: none;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      transition: all 0.25s cubic-bezier(0.2, 0.8, 0.2, 1);
      position: relative;
      overflow: hidden;
      cursor: pointer;
    }

    .toc-card:hover {
      border-color: var(--gold-primary);
      box-shadow: var(--shadow-md);
      transform: translateY(-2.5px);
    }

    .toc-card::before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      height: 3px;
      background: transparent;
      transition: background 0.2s ease;
    }

    .toc-card:hover::before {
      background: var(--gold-gradient);
    }

    .toc-card-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 10px;
    }

    .toc-icon-box {
      width: 38px;
      height: 38px;
      border-radius: 8px;
      background: rgba(21, 65, 58, 0.08);
      color: var(--olive-dark);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s ease;
    }

    .toc-card:hover .toc-icon-box {
      background: var(--gold-primary);
      color: #FFFFFF;
    }

    .toc-badge-count {
      font-size: 11px;
      font-weight: 700;
      padding: 3px 8px;
      border-radius: 12px;
      background: var(--olive-subtle);
      color: var(--olive-dark);
    }

    .toc-card-body {
      flex: 1;
      margin-bottom: 12px;
    }

    .toc-name {
      font-size: 14.5px;
      font-weight: 800;
      color: var(--olive-deep);
      line-height: 1.5;
    }

    .toc-card-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 11.5px;
      font-weight: 700;
      color: var(--gold-deep);
      border-top: 1px solid rgba(21, 65, 58, 0.06);
      padding-top: 10px;
    }

    .toc-arrow {
      transition: transform 0.2s ease;
    }

    .toc-card:hover .toc-arrow {
      transform: translateX(-4px);
    }

    /* ==========================================================================
       أقسام الأبواب التنظيمية (Part / Chapter Sections)
       ========================================================================== */
    .plan-section {
      margin-bottom: 40px;
      scroll-margin-top: 130px;
    }

    .section-header-banner {
      background: linear-gradient(135deg, var(--olive-dark) 0%, var(--olive-deep) 100%);
      color: var(--surface-white);
      border-radius: var(--radius-md);
      padding: 24px 30px;
      margin-bottom: 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      overflow: hidden;
      border-right: 6px solid var(--gold-primary);
      box-shadow: var(--shadow-md);
    }

    .section-header-content {
      position: relative;
      z-index: 2;
    }

    .section-pill-num {
      display: inline-block;
      background: var(--gold-gradient);
      color: var(--olive-deep);
      font-size: 12px;
      font-weight: 900;
      padding: 4px 12px;
      border-radius: 4px;
      margin-bottom: 8px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .section-title-wrap h2 {
      font-size: 22px;
      font-weight: 900;
      color: #FFFFFF;
      line-height: 1.4;
      margin: 0;
    }

    .section-icon-watermark {
      position: absolute;
      left: 20px;
      opacity: 0.12;
      transform: scale(2.6);
      pointer-events: none;
      color: #FFFFFF;
    }

    /* كروت المباحث الفرعية (Sub-section Card) */
    .sub-section-card {
      background: var(--surface-white);
      border: 1px solid rgba(21, 65, 58, 0.12);
      border-radius: var(--radius-md);
      padding: 26px 30px;
      margin-bottom: 22px;
      transition: border-color 0.2s ease;
      box-shadow: var(--shadow-sm);
      scroll-margin-top: 140px;
    }

    .sub-section-card:hover {
      border-color: rgba(197, 155, 39, 0.45);
    }

    .sub-section-title {
      font-size: 16.5px;
      font-weight: 800;
      color: var(--olive-deep);
      margin-bottom: 16px;
      padding-bottom: 12px;
      border-bottom: 1px solid rgba(21, 65, 58, 0.08);
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .sub-section-pill {
      background: var(--olive-subtle);
      color: var(--olive-dark);
      font-size: 12.5px;
      font-weight: 800;
      padding: 3px 10px;
      border-radius: 4px;
      border: 1px solid rgba(21, 65, 58, 0.15);
      font-family: inherit;
    }

    /* Preamble box */
    .preamble-box {
      background: var(--surface-ivory);
      border-right: 4px solid var(--gold-primary);
      border-radius: var(--radius-sm);
      padding: 18px 22px;
      margin-bottom: 22px;
      font-size: 14.5px;
      color: var(--olive-dark);
    }

    .preamble-label {
      font-size: 11px;
      font-weight: 800;
      color: var(--gold-deep);
      text-transform: uppercase;
      margin-bottom: 6px;
      display: flex;
      align-items: center;
      gap: 6px;
    }

    /* Callout Cards */
    .callout-card {
      display: flex;
      gap: 16px;
      padding: 16px 20px;
      border-radius: 8px;
      margin: 16px 0;
      font-size: 14px;
      line-height: 1.7;
    }

    .callout-icon {
      flex-shrink: 0;
      margin-top: 2px;
    }

    .callout-warning {
      background: #FFF8F6;
      border: 1px solid rgba(198, 30, 29, 0.25);
      border-right: 4px solid var(--union-red);
      color: #5A1616;
    }

    .callout-warning .callout-icon {
      color: var(--union-red);
    }

    .callout-mandatory {
      background: var(--olive-subtle);
      border: 1px solid rgba(21, 65, 58, 0.2);
      border-right: 4px solid var(--olive-dark);
      color: var(--olive-deep);
    }

    .callout-mandatory .callout-icon {
      color: var(--olive-dark);
    }

    /* Code Tree Block */
    .code-tree-block {
      background: #1A2421;
      color: #E6F0EC;
      direction: ltr;
      text-align: left;
      padding: 16px 20px;
      border-radius: 8px;
      font-family: Consolas, "Courier New", monospace;
      font-size: 13px;
      line-height: 1.6;
      margin: 14px 0;
      border: 1px solid rgba(197, 155, 39, 0.3);
      overflow-x: auto;
    }

    /* Lists styling */
    .bullet-list {
      list-style: none;
      padding: 0;
      margin: 14px 0;
    }

    .bullet-list li {
      position: relative;
      padding-right: 22px;
      margin-bottom: 8px;
      line-height: 1.75;
      color: #243B36;
    }

    .bullet-list li::before {
      content: "";
      position: absolute;
      right: 4px;
      top: 10px;
      width: 6px;
      height: 6px;
      background: var(--gold-primary);
      border-radius: 50%;
    }

    .executive-numbered-list {
      list-style: none;
      counter-reset: custom-counter;
      padding: 0;
      margin: 16px 0;
    }

    .num-item {
      display: flex;
      align-items: flex-start;
      gap: 14px;
      margin-bottom: 12px;
      line-height: 1.75;
    }

    .num-badge {
      flex-shrink: 0;
      width: 26px;
      height: 26px;
      background: var(--olive-subtle);
      color: var(--olive-dark);
      border: 1px solid rgba(21, 65, 58, 0.2);
      font-size: 12px;
      font-weight: 800;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 2px;
    }

    .num-content {
      flex: 1;
      color: #1F3430;
    }

    /* Checklists */
    .checklist-container {
      background: var(--surface-ivory);
      border: 1px solid rgba(197, 155, 39, 0.25);
      border-radius: 8px;
      padding: 16px 20px;
      margin: 14px 0;
    }

    .checklist-item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 8px 0;
      border-bottom: 1px dashed rgba(21, 65, 58, 0.08);
      cursor: pointer;
      user-select: none;
      transition: background 0.15s ease;
    }

    .checklist-item:last-child {
      border-bottom: none;
    }

    .checklist-checkbox {
      display: none;
    }

    .checklist-box {
      width: 18px;
      height: 18px;
      border: 2px solid var(--olive-light);
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      transition: all 0.2s ease;
      background: #FFFFFF;
    }

    .checklist-checkbox:checked + .checklist-box {
      background: var(--olive-dark);
      border-color: var(--olive-dark);
    }

    .checklist-checkbox:checked + .checklist-box::after {
      content: "✓";
      color: #FFFFFF;
      font-size: 13px;
      font-weight: 900;
    }

    .checklist-label-text {
      font-size: 14px;
      font-weight: 600;
      color: var(--olive-deep);
    }

    .checklist-checkbox:checked ~ .checklist-label-text {
      text-decoration: line-through;
      color: var(--text-subtle);
    }

    .category-header-pill {
      display: inline-block;
      font-weight: 800;
      color: var(--gold-deep);
      font-size: 13.5px;
      margin: 14px 0 6px 0;
      padding: 4px 10px;
      background: var(--gold-pale);
      border-radius: 4px;
      border: 1px solid var(--gold-border);
    }

    .eval-section-block {
      margin: 20px 0 10px 0;
    }

    .eval-block-title {
      font-size: 15px;
      font-weight: 800;
      color: var(--olive-dark);
      border-right: 3px solid var(--olive-dark);
      padding-right: 10px;
    }

    /* Forms and Decree Box */
    .official-form-box {
      background: #FFFFFF;
      border: 2px solid var(--olive-dark);
      border-radius: 10px;
      padding: 24px;
      margin: 18px 0;
      box-shadow: 0 4px 14px rgba(21, 65, 58, 0.06);
    }

    .form-header-badge {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 2px solid var(--gold-primary);
      padding-bottom: 12px;
      margin-bottom: 18px;
    }

    .form-title-text {
      font-size: 16px;
      font-weight: 800;
      color: var(--olive-deep);
    }

    .form-ref-code {
      font-size: 11.5px;
      font-weight: 800;
      color: var(--gold-deep);
      background: var(--gold-pale);
      padding: 3px 10px;
      border-radius: 4px;
      border: 1px solid var(--gold-border);
    }

    .decree-box {
      background: linear-gradient(135deg, var(--surface-ivory) 0%, #FFFFFF 100%);
      border: 2px solid var(--gold-primary);
      border-radius: var(--radius-md);
      padding: 34px 38px;
      margin: 36px 0;
      position: relative;
      box-shadow: var(--shadow-md);
      overflow: hidden;
    }

    .decree-watermark {
      position: absolute;
      bottom: -30px;
      left: -30px;
      width: 220px;
      height: 220px;
      opacity: 0.05;
      pointer-events: none;
    }

    .decree-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
      border-bottom: 1.5px dashed var(--gold-border);
      padding-bottom: 14px;
    }

    .decree-badge {
      background: var(--gold-gradient);
      color: var(--olive-deep);
      font-size: 13px;
      font-weight: 900;
      padding: 6px 16px;
      border-radius: 6px;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .decree-date {
      font-size: 12.5px;
      font-weight: 700;
      color: var(--text-muted);
    }

    .signatures-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 20px;
      margin-top: 36px;
    }

    .sign-box {
      background: var(--surface-ivory);
      border: 1px solid rgba(21, 65, 58, 0.15);
      border-radius: 8px;
      padding: 20px;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      min-height: 160px;
    }

    .sign-role {
      font-size: 13.5px;
      font-weight: 800;
      color: var(--olive-deep);
      margin-bottom: 4px;
    }

    .sign-dept {
      font-size: 11.5px;
      font-weight: 600;
      color: var(--gold-deep);
    }

    .sign-space {
      height: 48px;
      border-bottom: 1px dashed rgba(21, 65, 58, 0.2);
      margin: 12px 20px;
    }

    .sign-status {
      font-size: 11.5px;
      font-weight: 700;
      color: var(--text-muted);
    }

    /* ==========================================================================
       القائمة الجانبية السريعة والـ Accordion (Side Drawer)
       ========================================================================== */
    .drawer-overlay {
      position: fixed;
      inset: 0;
      background: rgba(13, 43, 38, 0.6);
      backdrop-filter: blur(4px);
      z-index: 10001;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.3s ease;
    }

    .drawer-overlay.open {
      opacity: 1;
      pointer-events: auto;
    }

    .quick-drawer {
      position: fixed;
      top: 0;
      right: -380px;
      width: 360px;
      height: 100vh;
      background: var(--surface-white);
      box-shadow: -8px 0 30px rgba(0,0,0,0.25);
      z-index: 10002;
      transition: right 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
      display: flex;
      flex-direction: column;
    }

    .quick-drawer.open {
      right: 0;
    }

    .drawer-header {
      background: var(--olive-dark);
      padding: 18px 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 2.5px solid var(--gold-primary);
    }

    .drawer-header h3 {
      font-size: 15px;
      font-weight: 800;
      color: #fff;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .drawer-close-btn {
      background: transparent;
      border: none;
      color: #fff;
      font-size: 24px;
      cursor: pointer;
      line-height: 1;
    }

    .drawer-nav-list {
      flex: 1;
      overflow-y: auto;
      padding: 14px 12px;
      list-style: none;
    }

    /* Accordion in Drawer */
    .drawer-quick-link {
      display: block;
      padding: 10px 14px;
      color: var(--olive-deep);
      text-decoration: none;
      font-size: 13.5px;
      font-weight: 700;
      border-radius: 6px;
      margin-bottom: 6px;
      background: var(--surface-ivory);
      border: 1px solid rgba(21, 65, 58, 0.08);
      transition: all 0.2s ease;
      cursor: pointer;
    }

    .drawer-quick-link:hover {
      background: var(--gold-pale);
      color: var(--gold-deep);
      border-color: var(--gold-border);
    }

    .drawer-group {
      margin-bottom: 8px;
      border: 1px solid rgba(21, 65, 58, 0.1);
      border-radius: 8px;
      overflow: hidden;
      background: #FFFFFF;
    }

    .drawer-group-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 12px;
      background: #FAFCFA;
      cursor: pointer;
      font-size: 13px;
      font-weight: 800;
      color: var(--olive-deep);
      transition: background 0.2s;
      border-bottom: 1px solid transparent;
    }

    .drawer-group-header:hover {
      background: var(--gold-pale);
      color: var(--gold-deep);
    }

    .drawer-group.open .drawer-group-header {
      border-bottom-color: rgba(21, 65, 58, 0.08);
      background: var(--surface-ivory);
    }

    .drawer-group-title {
      display: flex;
      align-items: center;
      gap: 8px;
      color: inherit;
      flex: 1;
    }

    .drawer-group-icon {
      color: var(--olive-dark);
      display: flex;
      align-items: center;
    }

    .drawer-group-arrow {
      transition: transform 0.2s ease;
      color: var(--gold-deep);
    }

    .drawer-group.open .drawer-group-arrow {
      transform: rotate(90deg);
    }

    .drawer-sub-list {
      list-style: none;
      padding: 6px 8px;
      background: #FFFFFF;
      display: none;
    }

    .drawer-group.open .drawer-sub-list {
      display: block;
    }

    .drawer-sub-item a {
      display: block;
      padding: 6px 12px;
      font-size: 12px;
      font-weight: 600;
      color: var(--text-main);
      text-decoration: none;
      border-radius: 4px;
      transition: all 0.15s ease;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      cursor: pointer;
    }

    .drawer-sub-item a:hover {
      background: var(--gold-pale);
      color: var(--gold-deep);
      padding-right: 16px;
    }

    /* Floating Buttons */
    .floating-fab-container {
      position: fixed;
      bottom: 28px;
      left: 28px;
      z-index: 999;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .fab-btn {
      width: 46px;
      height: 46px;
      border-radius: 50%;
      background: var(--olive-dark);
      color: #FFFFFF;
      border: 2px solid var(--gold-primary);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      box-shadow: var(--shadow-md);
      transition: all 0.2s ease;
      text-decoration: none;
    }

    .fab-btn:hover {
      transform: translateY(-2px);
      background: var(--olive-deep);
    }

    /* Search Modal */
    .search-modal {
      position: fixed;
      inset: 0;
      background: rgba(13, 43, 38, 0.7);
      backdrop-filter: blur(6px);
      z-index: 10005;
      display: none;
      align-items: flex-start;
      justify-content: center;
      padding-top: 100px;
    }

    .search-modal-box {
      background: #FFFFFF;
      width: 90%;
      max-width: 600px;
      border-radius: 12px;
      box-shadow: 0 16px 50px rgba(0,0,0,0.3);
      border: 2px solid var(--gold-primary);
      overflow: hidden;
    }

    .search-input-row {
      display: flex;
      align-items: center;
      padding: 14px 18px;
      border-bottom: 1px solid rgba(21, 65, 58, 0.1);
      gap: 12px;
    }

    .search-input-field {
      flex: 1;
      border: none;
      outline: none;
      font-size: 15px;
      font-family: inherit;
      color: var(--olive-deep);
      font-weight: 600;
    }

    .search-counter {
      font-size: 12px;
      font-weight: 700;
      color: var(--gold-deep);
    }

    .search-ctrl-btn {
      background: var(--olive-subtle);
      border: 1px solid rgba(21, 65, 58, 0.15);
      border-radius: 4px;
      padding: 4px 8px;
      cursor: pointer;
      color: var(--olive-dark);
    }

    .search-highlight {
      background: #FFE27A;
      color: #000;
      border-radius: 2px;
      padding: 1px 2px;
    }

    .search-highlight.active-match {
      background: #E85A18;
      color: #FFFFFF;
    }

    /* Print media: UNHIDE ALL TABS FOR PRINTING */
    @media print {
      body {
        background: #FFFFFF;
        font-size: 12pt;
      }

      .executive-topbar,
      .tabs-nav-sticky-wrapper,
      .floating-fab-container,
      .drawer-overlay,
      .quick-drawer,
      .search-modal,
      .tab-footer-nav,
      #progress-bar {
        display: none !important;
      }

      .document-wrapper {
        margin: 0 !important;
        padding: 0 !important;
        max-width: 100% !important;
      }

      .official-paper {
        box-shadow: none !important;
        border: none !important;
      }

      .content-body {
        padding: 0 !important;
      }

      /* Force display all tab panes so entire document is printed */
      .tab-pane {
        display: block !important;
        opacity: 1 !important;
        page-break-after: always;
      }

      .plan-section,
      .cover-section,
      .toc-section {
        page-break-after: always;
      }

      a {
        text-decoration: none !important;
        color: inherit !important;
      }
    }
'''

def build_cover_html():
    return '''
      <section class="cover-section" id="doc-cover">
        <div class="cover-header-bar">
          <div class="gov-hierarchy">
            الجمهورية العربية السورية<br>
            الاتحاد الوطني لطلبة سورية<br>
            فرع جامعة حمص<br>
            <span>القسم الإعلامي المركزي</span>
          </div>
          <div class="cover-logo-wrapper">
            <img src="assets/images/union-logo.svg" alt="شعار الاتحاد الوطني لطلبة سورية" class="cover-logo-img">
          </div>
        </div>

        <div class="cover-badge-row">
          <span class="badge-status">مسودة تنظيمية معتمدة</span>
          <span class="badge-ref">وثيقة رقم: UMS-MED-2026-02</span>
          <span class="badge-version">الإصدار 2.0 (الهيكلية التفاعلية المحدثة 2026)</span>
        </div>

        <h1 class="cover-main-title">الدليل الإعلامي الموحّد لتغطية الفعاليات والأنشطة الطلابية</h1>
        <p class="cover-sub-title">الوثيقة المرجعية الشاملة لإجراءات التخطيط، والإنتاج، والتصميم، والنشر، والأرشفة، والحوكمة، وضبط جودة العمل الإعلامي الطلابي.</p>

        <div class="cover-accent-line"></div>

        <div class="cover-meta-grid">
          <div class="meta-item">
            <div class="meta-item-label">الجهة المسؤولة</div>
            <div class="meta-item-value">القسم الإعلامي في اتحاد الطلبة بجامعة حمص</div>
          </div>
          <div class="meta-item">
            <div class="meta-item-label">نطاق التطبيق</div>
            <div class="meta-item-value">الفريق المركزي، والمكاتب الإعلامية بالهيئات والمعاهد، والمتطوعون</div>
          </div>
          <div class="meta-item">
            <div class="meta-item-label">طبيعة الوثيقة</div>
            <div class="meta-item-value">دليل سياسات ومعايير وإجراءات ونماذج تشغيلية (11 باباً تنظيمياً)</div>
          </div>
          <div class="meta-item">
            <div class="meta-item-label">حالة الوثيقة</div>
            <div class="meta-item-value">مسودة تنظيمية معتمدة قابلة للمراجعة والتحديث الدوري</div>
          </div>
        </div>

        <div class="metrics-ribbon">
          <div class="metric-pill">
            <div class="metric-number">11</div>
            <div class="metric-label">باباً تنظيمياً رئيسياً</div>
          </div>
          <div class="metric-pill">
            <div class="metric-number">52</div>
            <div class="metric-label">مبحثاً وفصلاً تخصصياً</div>
          </div>
          <div class="metric-pill">
            <div class="metric-number">07</div>
            <div class="metric-label">نماذج تشغيلية وقوائم تحقق</div>
          </div>
          <div class="metric-pill">
            <div class="metric-number">100%</div>
            <div class="metric-label">مطابقة للهوية المؤسسية</div>
          </div>
        </div>
      </section>
    '''

def build_toc_html(parts):
    cards = []
    
    for i, p in enumerate(parts, 1):
        raw_t = p['raw_title']
        if ':' in raw_t:
            parts_split = raw_t.split(':', 1)
            pill_text = parts_split[0].strip()
            title_text = parts_split[1].strip()
        else:
            pill_text = f"الباب {i:02d}"
            title_text = raw_t

        sub_count = len(p.get('subsections', []))
        icon = ICONS.get(i, ICONS[1])

        cards.append(f'''
      <div onclick="switchTab('tab-{i}')" class="toc-card">
        <div class="toc-card-header">
          <div class="toc-icon-box">{icon}</div>
          <span class="toc-badge-count">{sub_count} مباحث</span>
        </div>
        <div class="toc-card-body">
          <span class="sub-section-pill" style="font-size:11px; margin-bottom:6px; display:inline-block;">{pill_text}</span>
          <div class="toc-name">{title_text}</div>
        </div>
        <div class="toc-card-footer">
          <span>فتح الباب (Tab)</span>
          <svg class="toc-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg>
        </div>
      </div>
        ''')
        
    return f'''
      <section class="toc-section" id="table-of-contents">
        <div class="toc-title-row">
          <h2 class="toc-title">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
            فهرس أبواب ومحتويات الدليل الموحد
          </h2>
          <span class="badge-status">تصفح بالتابات التفاعلية</span>
        </div>
        <div class="toc-grid">
          {''.join(cards)}
        </div>
      </section>
    '''

def build_intro_html(intro_data):
    body_html = parse_blocks(intro_data['body'], 0, "intro")
    return f'''
      <section class="plan-section" id="intro-section">
        <div class="section-header-banner">
          <div class="section-header-content">
            <span class="section-pill-num">المدخل العام</span>
            <div class="section-title-wrap">
              <h2>المقدمة: المنطلقات والرؤية المؤسسية</h2>
            </div>
          </div>
          <div class="section-icon-watermark">{ICONS["intro"]}</div>
        </div>
        <div class="sub-section-card">
          {body_html}
        </div>
      </section>
    '''

def build_part_html(p_idx, p_data, total_parts):
    raw_title = p_data['raw_title']
    
    if ':' in raw_title:
        parts_split = raw_title.split(':', 1)
        pill_text = parts_split[0].strip()
        title_text = parts_split[1].strip()
    else:
        pill_text = f"الباب {p_idx}"
        title_text = raw_title

    icon = ICONS.get(p_idx, ICONS[1])
    
    subsecs = p_data.get('subsections', [])
    sub_cards_html = []
    
    for s_idx, sec in enumerate(subsecs, 1):
        pill_val = sec.get('num', f"{p_idx}.{s_idx}")
        title_val = sec.get('title', '')
        sec_body = sec.get('body', '')
        
        parsed_body = parse_blocks(sec_body, p_idx, f"p{p_idx}_s{s_idx}")
        
        # Special styling for operational forms in Part 11
        if p_idx == 11 and "طلب تغطية" in title_val:
            card_content = f'''
              <div class="official-form-box">
                <div class="form-header-badge">
                  <div class="form-title-text">{title_val}</div>
                  <div class="form-ref-code">نموذج تشغيلي رقم: MED-REQ-01</div>
                </div>
                {parsed_body}
              </div>
            '''
        elif p_idx == 11 and "تقييم التغطية" in title_val:
            card_content = f'''
              <div class="official-form-box">
                <div class="form-header-badge">
                  <div class="form-title-text">{title_val}</div>
                  <div class="form-ref-code">نموذج تقييم رقم: MED-EVAL-05</div>
                </div>
                {parsed_body}
              </div>
            '''
        else:
            card_content = parsed_body

        sub_cards_html.append(f'''
          <div class="sub-section-card" id="sec-{p_idx}-{s_idx}">
            <div class="sub-section-title">
              <span class="sub-section-pill">{pill_val}</span>
              <span>{title_val}</span>
            </div>
            {card_content}
          </div>
        ''')

    # Special additions for Part 11 (Endorsement, decree box & signatures)
    if p_idx == 11:
        decree_html = '''
          <div class="decree-box">
            <img src="assets/images/union-emblem.svg" class="decree-watermark" alt="" aria-hidden="true">
            <div class="decree-header">
              <span class="decree-badge">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                الخلاصة التنظيمية والاعتماد الرسمي
              </span>
              <span class="decree-date">فرع جامعة حمص – القسم الإعلامي المركزي</span>
            </div>
            <p>تقوم التغطية الإعلامية المتكاملة على سلسلة مترابطة من العمليات: التخطيط، والتجهيز، والتنفيذ الميداني، والإنتاج، والمراجعة، والاعتماد، والنشر، والأرشفة، والتقييم.</p>
            <p>ولا يتحقق نجاح هذه السلسلة بجودة التصوير وحدها، بل بوضوح المسؤوليات، وصحة المعلومات، وكفاءة التنسيق، والالتزام بالمواعيد، والمحافظة على المواد الأصلية، والقدرة على تحويل التغطية إلى محتوى مهني يخدم أهداف اتحاد الطلبة ويعكس نشاطه بصورة دقيقة ومتسقة.</p>
            <p>ويُعد هذا الدليل إطاراً عملياً لتوحيد آليات العمل بين القسم الإعلامي المركزي والمكاتب الإعلامية التابعة، وتطوير جودة المخرجات، وبناء أرشيف مؤسسي منظم، وتعزيز استمرارية الخبرة والمعرفة داخل الفريق.</p>
          </div>

          <div class="signatures-grid">
            <div class="sign-box">
              <div>
                <div class="sign-role">رئيس القسم الإعلامي المركزي</div>
                <div class="sign-dept">فرع جامعة حمص</div>
              </div>
              <div class="sign-space"></div>
              <div class="sign-status">تم التدقيق والمطابقة الفنية</div>
            </div>

            <div class="sign-box">
              <div>
                <div class="sign-role">مسؤول المتابعة والتنسيق الميداني</div>
                <div class="sign-dept">المكاتب الإعلامية بالهيئات والمعاهد</div>
              </div>
              <div class="sign-space"></div>
              <div class="sign-status">تم الاعتماد التشغيلي</div>
            </div>

            <div class="sign-box">
              <div>
                <div class="sign-role">رئيس فرع اتحاد الطلبة</div>
                <div class="sign-dept">الاتحاد الوطني لطلبة سورية - جامعة حمص</div>
              </div>
              <div class="sign-space"></div>
              <div class="sign-status">موافق ومعتمد للعمل بموجبه</div>
            </div>
          </div>
        '''
        sub_cards_html.append(decree_html)

    # Next / Prev buttons in Tab Footer
    prev_tab = f"tab-{p_idx-1}" if p_idx > 1 else "tab-intro"
    prev_label = f"الباب السابق: {parts_data[p_idx-2]['raw_title'].split(':')[0]}" if p_idx > 1 else "العودة للغلاف والمقدمة"
    
    next_tab = f"tab-{p_idx+1}" if p_idx < total_parts else None
    next_label = f"الباب التالي: {parts_data[p_idx]['raw_title'].split(':')[0]}" if p_idx < total_parts else None

    footer_buttons = []
    footer_buttons.append(f'''
      <button onclick="switchTab('{prev_tab}')" class="tab-nav-jump-btn prev-btn">
        <span>‹</span>
        <span>{prev_label}</span>
      </button>
    ''')

    if next_tab:
        footer_buttons.append(f'''
          <button onclick="switchTab('{next_tab}')" class="tab-nav-jump-btn next-btn">
            <span>{next_label}</span>
            <span>›</span>
          </button>
        ''')
    else:
        footer_buttons.append(f'''
          <button onclick="switchTab('tab-intro')" class="tab-nav-jump-btn next-btn">
            <span>العودة للبداية والفهرس</span>
            <span>🔝</span>
          </button>
        ''')

    footer_html = f'''
      <div class="tab-footer-nav">
        {''.join(footer_buttons)}
      </div>
    '''

    all_subs_html = '\n'.join(sub_cards_html)

    return f'''
      <section class="plan-section" id="chapter-{p_idx}">
        <div class="section-header-banner">
          <div class="section-header-content">
            <span class="section-pill-num">{pill_text}</span>
            <div class="section-title-wrap">
              <h2>{title_text}</h2>
            </div>
          </div>
          <div class="section-icon-watermark">{icon}</div>
        </div>
        
        {all_subs_html}
        {footer_html}
      </section>
    '''

def generate_full_html():
    print("Generating Cover...")
    cover_html = build_cover_html()
    
    print("Generating Table of Contents (11 Parts)...")
    toc_html = build_toc_html(parts_data)
    
    print("Generating Introduction...")
    intro_html = build_intro_html(doc['intro'])
    
    total_parts = len(parts_data)
    print(f"Generating {total_parts} Parts into dedicated Tab Panes...")
    
    # 1. Build Sticky Tabs Navigation Bar
    tab_nav_btns = [
        '''<button class="tab-btn active" data-tab="tab-intro" onclick="switchTab('tab-intro')">
             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
             <span>المدخل والفهرس</span>
           </button>'''
    ]

    # Tab Panes
    tab_panes = []

    # Tab Pane 0: Intro & Cover & TOC
    tab_panes.append(f'''
      <div class="tab-pane active" id="pane-tab-intro" data-tab="tab-intro">
        {cover_html}
        {toc_html}
        {intro_html}
        <div class="tab-footer-nav" style="justify-content: flex-start;">
          <button onclick="switchTab('tab-1')" class="tab-nav-jump-btn next-btn">
            <span>الانتقال إلى الباب الأول: التأسيس</span>
            <span>›</span>
          </button>
        </div>
      </div>
    ''')

    # Tab Panes 1-11
    for i, p_data in enumerate(parts_data, 1):
        raw_t = p_data['raw_title']
        short_num = f"{i}."
        if ':' in raw_t:
            short_name = raw_t.split(':', 1)[1].strip().split(' ')[0] # first word e.g. التأسيس
            full_short = f"{i}. {short_name}"
        else:
            full_short = f"الباب {i}"

        icon = ICONS.get(i, ICONS[1])

        tab_nav_btns.append(f'''
          <button class="tab-btn" data-tab="tab-{i}" onclick="switchTab('tab-{i}')">
            {icon}
            <span>{full_short}</span>
          </button>
        ''')

        part_content_html = build_part_html(i, p_data, total_parts)
        tab_panes.append(f'''
          <div class="tab-pane" id="pane-tab-{i}" data-tab="tab-{i}">
            {part_content_html}
          </div>
        ''')

    tab_nav_bar_html = '\n'.join(tab_nav_btns)
    all_panes_html = '\n'.join(tab_panes)

    # 2. Generate Accordion Drawer links
    drawer_items = [
        '<div onclick="switchTab(\'tab-intro\', \'doc-cover\'); toggleDrawer(false);" class="drawer-quick-link">🔝 غلاف الوثيقة</div>',
        '<div onclick="switchTab(\'tab-intro\', \'table-of-contents\'); toggleDrawer(false);" class="drawer-quick-link">📑 فهرس الأبواب</div>',
        '<div onclick="switchTab(\'tab-intro\', \'intro-section\'); toggleDrawer(false);" class="drawer-quick-link">📌 المقدمة والمنطلقات</div>'
    ]

    for i, p in enumerate(parts_data, 1):
        raw_t = p['raw_title']
        if ':' in raw_t:
            name = raw_t.split(':', 1)[1].strip()
            num = raw_t.split(':', 1)[0].strip()
        else:
            name = raw_t
            num = f"الباب {i}"

        icon = ICONS.get(i, ICONS[1])
        subsecs = p.get('subsections', [])
        
        sub_links = []
        for s_idx, sec in enumerate(subsecs, 1):
            s_num = sec.get('num', f"{i}.{s_idx}")
            s_title = sec.get('title', '')
            sub_links.append(f'<li class="drawer-sub-item"><a onclick="switchTab(\'tab-{i}\', \'sec-{i}-{s_idx}\'); toggleDrawer(false);" title="{s_title}"><span>{s_num}:</span> {s_title}</a></li>')
        
        sub_links_html = '\n'.join(sub_links)

        drawer_items.append(f'''
          <div class="drawer-group">
            <div class="drawer-group-header" onclick="this.parentElement.classList.toggle('open')">
              <div onclick="switchTab('tab-{i}'); toggleDrawer(false);" class="drawer-group-title">
                <span class="drawer-group-icon">{icon}</span>
                <span>{num}: {name}</span>
              </div>
              <span class="drawer-group-arrow">›</span>
            </div>
            <ul class="drawer-sub-list">
              {sub_links_html}
            </ul>
          </div>
        ''')

    drawer_items_html = '\n'.join(drawer_items)

    # Full HTML template
    html_template = f'''<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>الدليل الإعلامي الموحّد لتغطية الفعاليات والأنشطة الطلابية | اتحاد الطلبة بجامعة حمص</title>
  
  <!-- Fonts: Cairo High-End Typography -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">

  <style>
{CSS_STYLES}
  </style>
</head>
<body>

  <!-- Scroll Progress Indicator -->
  <div id="progress-bar"></div>

  <!-- Executive Top Bar -->
  <header class="executive-topbar">
    <a href="#" onclick="switchTab('tab-intro'); return false;" class="topbar-brand">
      <img src="assets/images/union-logo.svg" alt="الاتحاد الوطني لطلبة سورية" class="topbar-logo">
      <div class="topbar-title-block">
        <span class="topbar-org">فرع جامعة حمص – القسم الإعلامي</span>
        <span class="topbar-doc-name">الدليل الإعلامي الموحّد (11 باباً)</span>
      </div>
    </a>

    <div class="topbar-center-title">
      الوثيقة التشغيلية المعتمدة لعام 2026
    </div>

    <div class="topbar-actions">
      <button class="btn-action btn-search" id="search-trigger-btn" title="بحث فوري في كامل الدليل (Ctrl+F)">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <span>بحث شامل</span>
      </button>

      <button class="btn-action btn-print" onclick="window.print()" title="طباعة أو تصدير PDF كامل">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
        <span>طباعة / PDF</span>
      </button>

      <button class="btn-action btn-drawer" id="drawer-toggle-btn" title="فهرس المباحث الجانبي">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
        <span>الفهرس</span>
      </button>
    </div>
  </header>

  <!-- Sticky Tabs Ribbon -->
  <nav class="tabs-nav-sticky-wrapper" id="sticky-tabs-ribbon" aria-label="أبواب الدليل">
    <div class="tabs-nav-container" id="tabs-container">
      {tab_nav_bar_html}
    </div>
  </nav>

  <!-- Quick Drawer Overlay & Sidebar -->
  <div class="drawer-overlay" id="drawer-overlay"></div>
  <aside class="quick-drawer" id="quick-drawer">
    <div class="drawer-header">
      <h3>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
        فهرس الأبواب والمباحث
      </h3>
      <button class="drawer-close-btn" id="drawer-close-btn">&times;</button>
    </div>
    <div class="drawer-nav-list">
      {drawer_items_html}
    </div>
  </aside>

  <!-- Floating Navigation Controls -->
  <div class="floating-fab-container">
    <button onclick="window.scrollTo({{ top: 0, behavior: 'smooth' }})" class="fab-btn" title="إلى أعلى الصفحة">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="18 15 12 9 6 15"/></svg>
    </button>
    <button onclick="switchTab('tab-intro')" class="fab-btn" title="إلى الفهرس والغلاف">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
    </button>
  </div>

  <!-- Search Modal -->
  <div class="search-modal" id="search-modal">
    <div class="search-modal-box">
      <div class="search-input-row">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--gold-deep)" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <input type="text" id="search-input" class="search-input-field" placeholder="ابحث في كامل الأبواب والـ 52 مبحثاً (تلقائي الانتقال للتاب)..." autofocus>
        <span class="search-counter" id="search-counter">0 من 0</span>
        <button class="search-ctrl-btn" id="search-prev-btn" title="السابق">▲</button>
        <button class="search-ctrl-btn" id="search-next-btn" title="التالي">▼</button>
        <button class="search-ctrl-btn" id="search-close-btn" title="إغلاق">✕</button>
      </div>
    </div>
  </div>

  <!-- Document Outer Container -->
  <main class="document-wrapper">
    <article class="official-paper">
      <img src="assets/images/union-emblem.svg" class="watermark-emblem" alt="" aria-hidden="true">
      
      <div class="content-body">
        {all_panes_html}
      </div>
    </article>
  </main>

  <script>
    // Tab Switching Core Function
    function switchTab(tabId, targetElementId) {{
      // 1. Update tab buttons
      const tabBtns = document.querySelectorAll('.tab-btn');
      tabBtns.forEach(btn => {{
        if (btn.getAttribute('data-tab') === tabId) {{
          btn.classList.add('active');
          btn.scrollIntoView({{ behavior: 'smooth', block: 'nearest', inline: 'center' }});
        }} else {{
          btn.classList.remove('active');
        }}
      }});

      // 2. Update tab panes
      const tabPanes = document.querySelectorAll('.tab-pane');
      tabPanes.forEach(pane => {{
        if (pane.getAttribute('data-tab') === tabId) {{
          pane.classList.add('active');
        }} else {{
          pane.classList.remove('active');
        }}
      }});

      // 3. Scroll to target element if specified, else scroll to top of document
      if (targetElementId) {{
        setTimeout(() => {{
          const targetEl = document.getElementById(targetElementId);
          if (targetEl) {{
            targetEl.scrollIntoView({{ behavior: 'smooth', block: 'start' }});
          }}
        }}, 50);
      }} else {{
        window.scrollTo({{ top: 0, behavior: 'smooth' }});
      }}

      // 4. Update URL hash
      if (history.replaceState) {{
        history.replaceState(null, null, '#' + tabId);
      }}
    }}

    // Check URL Hash on page load
    window.addEventListener('DOMContentLoaded', () => {{
      const hash = window.location.hash.replace('#', '');
      if (hash) {{
        if (hash.startsWith('tab-')) {{
          switchTab(hash);
        }} else if (hash.startsWith('chapter-')) {{
          const partNum = hash.replace('chapter-', '');
          switchTab('tab-' + partNum);
        }} else if (hash.startsWith('sec-')) {{
          const parts = hash.split('-');
          const partNum = parts[1];
          switchTab('tab-' + partNum, hash);
        }}
      }}
    }});

    // Scroll Progress
    window.addEventListener('scroll', () => {{
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      document.getElementById('progress-bar').style.width = scrolled + '%';
    }});

    // Side Drawer Toggle
    const drawer = document.getElementById('quick-drawer');
    const overlay = document.getElementById('drawer-overlay');
    const drawerOpenBtn = document.getElementById('drawer-toggle-btn');
    const drawerCloseBtn = document.getElementById('drawer-close-btn');

    function toggleDrawer(open) {{
      if (open) {{
        drawer.classList.add('open');
        overlay.classList.add('open');
      }} else {{
        drawer.classList.remove('open');
        overlay.classList.remove('open');
      }}
    }}

    drawerOpenBtn.addEventListener('click', () => toggleDrawer(true));
    drawerCloseBtn.addEventListener('click', () => toggleDrawer(false));
    overlay.addEventListener('click', () => toggleDrawer(false));

    // Global Search Engine Across All Tabs
    const searchTrigger = document.getElementById("search-trigger-btn");
    const searchModal = document.getElementById("search-modal");
    const searchInput = document.getElementById("search-input");
    const searchCounter = document.getElementById("search-counter");
    const searchPrev = document.getElementById("search-prev-btn");
    const searchNext = document.getElementById("search-next-btn");
    const searchClose = document.getElementById("search-close-btn");

    let currentMatchIndex = -1;
    let matches = [];

    function openSearch() {{
      searchModal.style.display = "flex";
      searchInput.focus();
      searchInput.select();
    }}

    function closeSearch() {{
      searchModal.style.display = "none";
      clearHighlights();
    }}

    searchTrigger.addEventListener("click", openSearch);
    searchClose.addEventListener("click", closeSearch);

    window.addEventListener("keydown", (e) => {{
      if ((e.ctrlKey || e.metaKey) && (e.key === 'f' || e.key === 'F')) {{
        e.preventDefault();
        openSearch();
      }}
      if (e.key === "Escape" && searchModal.style.display === "flex") {{
        closeSearch();
      }}
    }});

    function clearHighlights() {{
      document.querySelectorAll("mark.search-highlight").forEach((el) => {{
        const parent = el.parentNode;
        parent.replaceChild(document.createTextNode(el.textContent), el);
        parent.normalize();
      }});
      matches = [];
      currentMatchIndex = -1;
      searchCounter.textContent = "0 من 0";
    }}

    function highlightText(query) {{
      clearHighlights();
      if (!query || query.trim().length < 2) return;

      const escaped = query.replace(/[.*+?^${{}}()|[\\]\\\\]/g, "\\\\$&");
      const regex = new RegExp(`(${{escaped}})`, "gi");

      const walker = document.createTreeWalker(
        document.querySelector(".content-body"),
        NodeFilter.SHOW_TEXT,
        {{
          acceptNode: (node) => {{
            if (node.parentNode.tagName === "SCRIPT" || node.parentNode.tagName === "STYLE" || node.parentNode.tagName === "MARK") {{
              return NodeFilter.FILTER_REJECT;
            }}
            return regex.test(node.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
          }}
        }}
      );

      const nodesToReplace = [];
      while (walker.nextNode()) {{
        nodesToReplace.push(walker.currentNode);
      }}

      nodesToReplace.forEach((node) => {{
        const fragment = document.createDocumentFragment();
        const parts = node.nodeValue.split(regex);
        parts.forEach((part) => {{
          if (part.toLowerCase() === query.toLowerCase()) {{
            const mark = document.createElement("mark");
            mark.className = "search-highlight";
            mark.textContent = part;
            fragment.appendChild(mark);
          }} else if (part.length > 0) {{
            fragment.appendChild(document.createTextNode(part));
          }}
        }});
        node.parentNode.replaceChild(fragment, node);
      }});

      matches = Array.from(document.querySelectorAll("mark.search-highlight"));
      if (matches.length > 0) {{
        currentMatchIndex = 0;
        updateActiveMatch();
      }} else {{
        searchCounter.textContent = "0 من 0";
      }}
    }}

    function updateActiveMatch() {{
      matches.forEach((m, idx) => {{
        if (idx === currentMatchIndex) {{
          m.classList.add("active-match");
          
          // AUTO-SWITCH TAB TO MATCH CONTAINER
          const parentPane = m.closest('.tab-pane');
          if (parentPane) {{
            const tabId = parentPane.getAttribute('data-tab');
            if (!parentPane.classList.contains('active')) {{
              switchTab(tabId);
            }}
          }}
          
          m.scrollIntoView({{ behavior: "smooth", block: "center" }});
        }} else {{
          m.classList.remove("active-match");
        }}
      }});
      searchCounter.textContent = `${{currentMatchIndex + 1}} من ${{matches.length}}`;
    }}

    searchInput.addEventListener("input", (e) => {{
      highlightText(e.target.value.trim());
    }});

    searchInput.addEventListener("keydown", (e) => {{
      if (e.key === "Enter") {{
        e.preventDefault();
        if (e.shiftKey) {{
          navigateSearch(-1);
        }} else {{
          navigateSearch(1);
        }}
      }}
    }});

    searchPrev.addEventListener("click", () => navigateSearch(-1));
    searchNext.addEventListener("click", () => navigateSearch(1));

    function navigateSearch(direction) {{
      if (matches.length === 0) return;
      currentMatchIndex = (currentMatchIndex + direction + matches.length) % matches.length;
      updateActiveMatch();
    }}

    function updateChecklistProgress() {{
      const allCheckboxes = document.querySelectorAll('.checklist-checkbox');
      const checked = document.querySelectorAll('.checklist-checkbox:checked');
    }}
  </script>
</body>
</html>
'''
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(html_template)
        
    print(f"Successfully generated index.html with TABS! File size: {len(html_template.encode('utf-8'))} bytes.")

if __name__ == '__main__':
    generate_full_html()
