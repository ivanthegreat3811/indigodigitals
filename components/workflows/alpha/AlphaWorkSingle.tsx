import defaultStyleSheet from './AlphaWorkflowCSS/AlphaWorkflow.module.css';

export interface IAlphaWorkSingle {
  text?: string;
}

const AlphaWorkSingle: React.FC<IAlphaWorkSingle> = ({ text }) => {
  console.log(0);

  return (
    <div className={defaultStyleSheet.singleWorkWrapper}>
      <div className={defaultStyleSheet.singleWorkContainer}>
        <a className={defaultStyleSheet.singleWorkLink}>
          <span className={`${defaultStyleSheet.singleWorkSpan} SUBTITLE`}>{text || 'example'}</span>
        </a>
      </div>
    </div>
  );
};

export default AlphaWorkSingle;
