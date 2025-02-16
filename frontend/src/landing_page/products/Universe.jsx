function Universe() {
  return (  
    <div className="row universe text-center border-top mt-5 mb-5">
      <h1 className="mt-5">The Zerodha Universe</h1>
      <p>
        Extend your trading and investment experience even further with our
        partner platforms
      </p>
      <div className="col-md-4 p-3 mt-5">
        <img src="media/images/smallcaseLogo.png" />
        <p className="text-small text-muted">Thematic investment platform</p>
      </div>
      <div className="col-md-4 p-3 mt-5">
        <img src="media/images/streakLogo.png" />
        <p className="text-small text-muted">Algo & strategy platform</p>
      </div>
      <div className="col-md-4 p-3 mt-5">
        <img src="media/images/sensibullLogo.svg" />
        <p className="text-small text-muted">Option trading platform</p>
      </div>
      <div className="col-md-4 p-3 mt-5">
        <img src="media/images/zerodhaFundhouse.png" />
        <p className="text-small text-muted">Asset management</p>
      </div>
      <div className="col-md-4 p-3 mt-5">
        <img src="media/images/goldenpiLogo.png" />
        <p className="text-small text-muted">Bonds trading platform</p>
      </div>
      <div className="col-md-4 p-3 mt-5">
        <img src="media/images/dittoLogo.png" />
        <p className="text-small text-muted">Insurance</p>
      </div>
      <button className="btn btn-primary mb-5 mt-3" style={{width: "auto", margin: "auto"}}>
        Signup Now
      </button>
    </div>
  );
}

export default Universe;