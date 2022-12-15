import defaultStyleSheet from './AlphaWorkflowCSS/AlphaWorkflow.module.css';

export interface IAlphaWorkPointer {}

const AlphaWorkPointer: React.FC<IAlphaWorkPointer> = () => {
  return (
    <div className={defaultStyleSheet.pointerWrapper}>
      <div className={defaultStyleSheet.pointerContainer}>
        {/* <Image src="/images/icon/workflow_pointer.png" alt="" fill /> */}
        <div className={defaultStyleSheet.pointer}></div>
      </div>
    </div>
  );
};

export default AlphaWorkPointer;
