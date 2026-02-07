function Progress(props) {
   var  {current,total} = props,
        progress = ((current +1)/total) *100;

   return (
    <div className="progress mb-3">
      <div className="progress-bar" style={{ style: `${progress}%` }}>
        {Math.round(progress)}%
      </div>
    </div>
  );
}

export default Progress;
