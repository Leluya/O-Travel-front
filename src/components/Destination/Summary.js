import './style.scss';

const Summary = () => (
  <div className="summary_wrapper">
    <div className="summary">
      Soluta voluptas a accusamus, eius voluptatibus iusto molestiae, vitae cupiditate necessitatibus facilis minima fugiat placeat. Ab mollitia, in totam consectetur iste esse quos reprehenderit quod iusto soluta nulla. Cupiditate, nostrum.
    </div>

    <div className="strong_points_wrapper">
      <div className="strong_points">
        <h2>Points forts</h2>
        <br />
        <ul>
          <span className="bullet_point">&#8227;</span><li> Soluta voluptas a accusamus</li><br />
          <span className="bullet_point">&#8227;</span><li> Ab mollitia, in totam consectetur iste esse</li><br />
          <span className="bullet_point">&#8227;</span><li> Quos reprehenderit quod iusto soluta nulla.</li><br />
        </ul>
      </div>
    </div>

  </div>
);

export default Summary;