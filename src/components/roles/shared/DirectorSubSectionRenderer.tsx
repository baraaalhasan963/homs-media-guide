import type React from 'react';
import type { ProductionSubSection } from '../../../data/roles/directorProductionContentSection1';

interface DirectorSubSectionRendererProps {
  data: ProductionSubSection[];
  intro?: string[];
}

/**
 * Shared structured renderer for Director sub-sections (paragraphs, numbered points,
 * sub-groups, tables, extra points, and concluding notes).
 */
export const DirectorSubSectionRenderer: React.FC<DirectorSubSectionRendererProps> = ({ data, intro }) => (
  <div className="space-y-8">
    {intro && intro.length > 0 && (
      <div className="p-4 sm:p-5 rounded-2xl bg-[#134F47]/5 border-r-4 border-[#134F47] space-y-2.5">
        {intro.map((para, i) => (
          <p key={i} className="text-sm sm:text-base leading-relaxed text-[#134F47] font-bold">
            {para}
          </p>
        ))}
      </div>
    )}

    {data.map((subSec) => (
      <div key={subSec.id} id={subSec.id} className="space-y-4 scroll-mt-36">
        <h3 className="text-base sm:text-lg font-black text-[#134F47] flex items-center gap-2 pb-2 border-b border-[#134F47]/10">
          <span className="w-2 h-2 rounded-full bg-[#E85B0D] flex-shrink-0" />
          <span>
            {subSec.number} {subSec.title}
          </span>
        </h3>

        <div className="space-y-3">
          {subSec.content.map((para, pIdx) => (
            <p key={pIdx} className="text-sm sm:text-base leading-relaxed text-[#134F47]/90 font-medium">
              {para}
            </p>
          ))}
        </div>

        {subSec.points && subSec.points.length > 0 && (
          <div className="space-y-3 pt-2">
            {subSec.pointsTitle && (
              <p className="text-sm sm:text-base font-bold text-[#134F47]">{subSec.pointsTitle}</p>
            )}
            <div className="space-y-2.5 pr-2">
              {subSec.points.map((pt, ptIdx) => (
                <div
                  key={ptIdx}
                  className="flex items-start gap-2.5 text-sm sm:text-base leading-relaxed text-[#134F47]/90"
                >
                  <span className="w-6 h-6 rounded-md bg-[#134F47]/10 text-[#134F47] flex items-center justify-center text-xs font-black flex-shrink-0 mt-0.5">
                    {ptIdx + 1}
                  </span>
                  <p>
                    {pt.title && <strong className="text-[#134F47] font-bold">{pt.title}: </strong>}
                    <span className="font-medium">{pt.desc}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {subSec.subGroups && subSec.subGroups.length > 0 && (
          <div className="space-y-4 pt-2">
            {subSec.subGroups.map((grp, gIdx) => (
              <div key={gIdx} className="p-4 rounded-xl bg-[#134F47]/[0.02] border border-[#134F47]/10 space-y-3">
                <h4 className="text-sm sm:text-base font-black text-[#134F47] pb-1 border-b border-[#134F47]/10">
                  {grp.title}
                </h4>
                {grp.content?.map((cPara, cpIdx) => (
                  <p key={cpIdx} className="text-sm sm:text-base leading-relaxed text-[#134F47]/90 font-medium">
                    {cPara}
                  </p>
                ))}
                {grp.pointsTitle && <p className="text-xs sm:text-sm font-bold text-[#134F47]">{grp.pointsTitle}</p>}
                {grp.points && grp.points.length > 0 && (
                  <div className="space-y-2 pr-2">
                    {grp.points.map((pt, ptIdx) => (
                      <div
                        key={ptIdx}
                        className="flex items-start gap-2.5 text-sm sm:text-base leading-relaxed text-[#134F47]/90"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E85B0D] flex-shrink-0 mt-2" />
                        <p>
                          {pt.title && <strong className="text-[#134F47] font-bold">{pt.title}: </strong>}
                          <span className="font-medium">{pt.desc}</span>
                        </p>
                      </div>
                    ))}
                  </div>
                )}
                {grp.note && <p className="text-xs sm:text-sm text-[#134F47]/80 font-medium italic">{grp.note}</p>}
              </div>
            ))}
          </div>
        )}

        {subSec.extraNote && (
          <p className="text-sm sm:text-base leading-relaxed text-[#134F47]/90 font-medium pt-1">{subSec.extraNote}</p>
        )}

        {subSec.table && (
          <div className="overflow-x-auto my-4 rounded-xl border border-[#134F47]/20 shadow-xs">
            <table className="w-full text-right text-xs sm:text-sm">
              <thead className="bg-[#134F47] text-[#FFF4E0] font-black">
                <tr>
                  {subSec.table.headers.map((h, i) => (
                    <th key={i} className="py-2.5 px-3 sm:px-4 font-black">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#134F47]/10">
                {subSec.table.rows.map((row, rIdx) => (
                  <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-white' : 'bg-[#134F47]/[0.02]'}>
                    {row.map((cell, cIdx) => (
                      <td key={cIdx} className="py-2.5 px-3 sm:px-4 font-bold text-[#134F47]/90">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {subSec.extraPoints && subSec.extraPoints.length > 0 && (
          <div className="space-y-3 pt-2">
            {subSec.extraPointsTitle && (
              <p className="text-sm sm:text-base font-bold text-[#134F47]">{subSec.extraPointsTitle}</p>
            )}
            <div className="space-y-2.5 pr-2">
              {subSec.extraPoints.map((pt, ptIdx) => (
                <div
                  key={ptIdx}
                  className="flex items-start gap-2.5 text-sm sm:text-base leading-relaxed text-[#134F47]/90"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E85B0D] flex-shrink-0 mt-2" />
                  <p>
                    {pt.title && <strong className="text-[#134F47] font-bold">{pt.title}: </strong>}
                    <span className="font-medium">{pt.desc}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {subSec.note && (
          <div className="p-4 rounded-xl bg-[#134F47]/5 border-r-4 border-[#134F47] text-sm sm:text-base leading-relaxed text-[#134F47] font-medium">
            {subSec.note}
          </div>
        )}
      </div>
    ))}
  </div>
);
