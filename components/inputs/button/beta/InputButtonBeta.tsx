import React, { CSSProperties, useState } from 'react';
import defaultStyleSheet from './InputButtonBetaCSS/InputButtonBeta.module.css';

export interface IInputButtonBeta {
  style?: CSSProperties;
  className?: string;
  isFocus?: boolean;
  fieldName?: string;
  value?: string;
  isChecked?: boolean;

  //sampleTextProp?: string | null;
}

const InputButtonBeta: React.FC<IInputButtonBeta> = ({ style, className, fieldName, value, isChecked }) => {
  const [isComponentFullfilled, setIsComponentFullfilled] = useState<boolean>(isChecked || false);
  const handleComponentClick = (event: React.MouseEvent) => {
    setIsComponentFullfilled(prev => !prev);
  };

  return (
    <div style={style ? style : {}} className={`${defaultStyleSheet.wrapper} ${className ? className : ''}`}>
      <div className={defaultStyleSheet.container}>
        <label className={defaultStyleSheet.label}>
          <input
            type="button"
            onClick={handleComponentClick}
            name={fieldName || ''}
            className={`${defaultStyleSheet.input} ${isComponentFullfilled && defaultStyleSheet.isFullfilled}`}
            value={value || 'VALUE'}
          />
        </label>
      </div>
    </div>
  );
};

export default InputButtonBeta;
