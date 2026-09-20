"use client";

import type { ReactElement } from "react";
import { Photo } from "@/components/ui/Photo/Photo";
import { siteMedia } from "@/data/media";
import { useLocale } from "@/context/useLocale";
import "@/components/sections/Heritage/heritage.desktop.css";
import "@/components/sections/Heritage/heritage.mobile.css";

export const Heritage = (): ReactElement => {
  const { dictionary } = useLocale();
  const { heritage } = dictionary;

  return (
    <section className="heritage" aria-labelledby="heritage-lead">
      <div className="heritage__numeral" aria-hidden="true">
        {heritage.numeral}
      </div>
      <div className="heritage__body">
        <div>
          <div className="heritage__eyebrow">{heritage.eyebrow}</div>
          <p className="heritage__lead" id="heritage-lead">
            {heritage.lead}
          </p>
        </div>
        <div className="heritage__col-right">
          <p className="heritage__copy">{heritage.copy}</p>
        </div>
      </div>
      <div className="heritage__strip">
        <Photo
          tag={heritage.photoTags.archival}
          src={siteMedia.heritage.archival}
        />
        <Photo
          tag={heritage.photoTags.tools}
          src={siteMedia.heritage.tools}
          variant="light"
        />
        <Photo
          tag={heritage.photoTags.portrait}
          src={siteMedia.heritage.portrait}
        />
      </div>
    </section>
  );
};
