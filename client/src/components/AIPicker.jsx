import CustomButton from './CustomButton';
import PropTypes from 'prop-types';

function AIPicker({ prompt, setPrompt, generatingImg, handleSubmit }) {
  return (
    <div className="aipicker-container">
      <textarea
        className="aipicker-textarea"
        placeholder="Ask AI..."
        rows={5}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <div className="flex flex-wrap gap-3">
        {generatingImg ? (
          <CustomButton
            type={'outline'}
            title={'Asking AI...'}
            customStyles={'text-xs'}
            handleClick={() => handleSubmit('logo')}
          />
        ) : (
          <>
            <CustomButton
              type={'outline'}
              title={'AI Logo'}
              customStyles={'text-xs'}
              handleClick={() => handleSubmit('logo')}
            />
            <CustomButton
              type={'outline'}
              title={'AI Full'}
              customStyles={'text-xs'}
              handleClick={() => handleSubmit('full')}
            />
          </>
        )}
      </div>
    </div>
  );
}

AIPicker.propTypes = {
  prompt: PropTypes.string,
  setPrompt: PropTypes.func,
  generatingImg: PropTypes.bool,
  handleSubmit: PropTypes.func,
};

export default AIPicker;
