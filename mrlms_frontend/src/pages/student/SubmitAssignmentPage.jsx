import { useState } from 'react';

const SubmitAssignmentPage = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');
  const [isDragOver, setIsDragOver] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleFileSelect = (selectedFile) => {
    setFile(selectedFile);
    setError('');
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) handleFileSelect(droppedFile);
  };

  const handleInputChange = (e) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) handleFileSelect(selectedFile);
  };

  const handleRemove = () => {
    setFile(null);
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) {
      setError('Please select a file before submitting');
      return;
    }
    setIsUploading(true);
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          alert('Submitted!');
          setFile(null);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  return (
    <div className="dashboard-panel mx-auto max-w-xl">
      <h2 className="dashboard-section-title">Submit Assignment</h2>
      <p className="mt-2 dashboard-muted">Upload your assignment file here.</p>
      <form className="mt-5 space-y-4" onSubmit={handleSubmit}>
        <div
          className={`dashboard-dropzone cursor-pointer ${
            isDragOver ? 'dashboard-dropzone-active' : 'hover:border-slate-400 dark:hover:border-slate-600'
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => document.getElementById('file-input').click()}
        >
          <p className="dashboard-muted">Drag and drop a file here or click to select</p>
          <input
            id="file-input"
            type="file"
            onChange={handleInputChange}
            className="hidden"
          />
        </div>
        {file && (
          <div className="mt-4">
            <p className="text-sm dashboard-muted">Selected: {file.name}</p>
            {file.type.startsWith('image/') && (
              <img src={URL.createObjectURL(file)} alt="Preview" className="mt-2 h-32 max-w-full rounded object-cover" />
            )}
            <button onClick={handleRemove} className="mt-1 text-sm text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">
              Remove
            </button>
          </div>
        )}
        {error && <p className="mt-2 text-sm text-red-400">{error}</p>}
        {isUploading && (
          <div className="mt-4">
            <div className="h-2 w-full rounded-full bg-slate-200 dark:bg-slate-700">
              <div className="h-2 rounded-full bg-blue-500 transition-all duration-300" style={{ width: `${progress}%` }} />
            </div>
            <p className="mt-1 text-sm dashboard-muted">{progress}%</p>
          </div>
        )}
        <button type="submit" className="dashboard-button-primary" disabled={!file || isUploading}>
          {isUploading ? 'Uploading...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default SubmitAssignmentPage;
