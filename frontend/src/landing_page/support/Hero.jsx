function Hero() {
  return (  
    <div className="row hero mb-5 p-3">
      <div className="heroTop mb-3"><h4>Support Portal</h4> <a href="">Track Tickets</a></div>
      <div className="col-md-7 p-3">
        <h1 className="fs-3 mb-3">
          Search for an answer or browse help topics to create a ticket
        </h1>
        <input className="mb-3"  placeholder="Eg. how do I activate F&O" />
        <br />
        <a href="">Track account opening</a>&nbsp;&nbsp;&nbsp;
        <a href="">Track segment activation</a><br />
        <a href="">Intraday margins</a>&nbsp;&nbsp;&nbsp;
        <a href="">Kite user manual</a>
      </div>
      <div className="col-md-5 p-3">
        <h1 className="fs-3">Featured</h1>
        <ol>
          <li>
            <a href="">Current Takeovers and Delisting - January 2024</a>
          </li>
          <li>
            <a href="">Latest Intraday leverages - MIS & CO</a>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Hero;