import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { CSSProperties, useEffect } from 'react';
import defaultStyleSheet from './AlphaWorkflowCSS/AlphaWorkflow.module.css';
import AlphaWorkPointer from './AlphaWorkPointer';
import AlphaWorkSingle from './AlphaWorkSingle';

export interface IAlphaWorkflow {
  style?: CSSProperties;
  className?: string;
  flowList?: string[];
  //sampleTextProp?: string | null;
}

const AlphaWorkflow: React.FC<IAlphaWorkflow> = ({ style, className, flowList }) => {
  useEffect(() => {
    AOS.init({ duration: 300 });
  });

  return (
    <div style={style ? style : {}} className={`${defaultStyleSheet.wrapper} ${className ? className : ''}`}>
      <div className={defaultStyleSheet.container}>
        {flowList ? (
          <>
            {flowList.map((work, index) => {
              return (
                <React.Fragment key={work}>
                  <div data-aos="fade-up" className="flex no-wrap" data-aos-delay={(index * 100).toString()}>
                    <AlphaWorkSingle text={work} />
                    {index !== flowList.length - 1 && <AlphaWorkPointer />}
                  </div>
                </React.Fragment>
              );
            })}
          </>
        ) : (
          <>
            {['work 1', 'work 2', 'work 3'].map((work, index) => {
              return (
                <React.Fragment key={work}>
                  <AlphaWorkSingle text={work} />
                  {index !== 2 && <AlphaWorkPointer />}
                </React.Fragment>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default AlphaWorkflow;
