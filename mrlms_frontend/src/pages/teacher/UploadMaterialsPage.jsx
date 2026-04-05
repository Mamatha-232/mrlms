import { useState } from 'react';

const UploadMaterialsPage = () => {
  const [files, setFiles] = useState([]);
  const [error, setError] = useState('');
  const [isDragOver, setIsDragOver] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleFilesSelect = (selectedFiles) => {
    setFiles(selectedFiles);
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
    const droppedFiles = Array.from(e.dataTransfer.files);
    if (droppedFiles.length > 0) handleFilesSelect(droppedFiles);
  };

  const handleInputChange = (e) => {
    const selectedFiles = Array.from(e.target.files || []);
    if (selectedFiles.length > 0) handleFilesSelect(selectedFiles);
  };

  const handleRemove = (index) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
    if (files.length === 1) setError('');
  };

  const handleUpload = () => {
    if (files.length === 0) {
      setError('Please select files before uploading');
      return;
    }
    setIsUploading(true);
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          alert('Materials uploaded (mock)');
          setFiles([]);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  return (
    <div className="dashboard-panel mx-auto max-w-xl">
      <h2 className="dashboard-section-title">Upload Materials</h2>
      <p className="mt-1 dashboard-muted">Add video, documents and resources for students.</p>
      <div
        className={`dashboard-dropzone mt-4 cursor-pointer ${
          isDragOver ? 'dashboard-dropzone-active' : 'hover:border-slate-400 dark:hover:border-slate-600'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => document.getElementById('files-input').click()}
      >
        <p className="dashboard-muted">Drag and drop files here or click to select</p>
        <input
          id="files-input"
          type="file"
          multiple
          onChange={handleInputChange}
          className="hidden"
        />
      </div>
      {files.length > 0 && (
        <ul className="mt-4 list-disc pl-6 text-sm text-slate-600 dark:text-slate-300">
          {files.map((f, index) => (
            <li key={index} className="flex items-center justify-between">
              <span>{f.name}</span>
              {f.type.startsWith('image/') && (
                <img src={URL.createObjectURL(f)} alt="Preview" className="ml-2 h-8 w-8 rounded object-cover" />
              )}
              <button
                onClick={() => handleRemove(index)}
                className="ml-2 text-xs text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
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
      <button
        className="dashboard-button-primary mt-3"
        onClick={handleUpload}
        disabled={files.length === 0 || isUploading}
      >
        {isUploading ? 'Uploading...' : 'Upload'}
      </button>
    </div>
  );
};

export default UploadMaterialsPage;
