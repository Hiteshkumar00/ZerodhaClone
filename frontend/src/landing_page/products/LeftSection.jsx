function LeftSection({imageURL, productName, productDesription, tryDemo, learnMore, googlePlay, appStore}) {
  return (  
    <div className="row p-5">
      <div className="col-md-6 p-5 productImg">
        <img src={imageURL} />
      </div>
      <div className="col-md-6 p-5 mt-5">
        <h1>{productName}</h1>
        <p>{productDesription}</p>
        <div>
          <a href={tryDemo}>Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true" /></a> 
          <a href={learnMore} style={{ marginLeft: "50px" }}>
            Learn More <i class="fa fa-long-arrow-right" aria-hidden="true" />
          </a>
        </div>
        <div className="mt-3 productLogoImg">
          <a href={googlePlay}>
            <img src="media/images/googlePlayBadge.svg" />
          </a>
          <a href={appStore}>
            <img src="media/images/appstoreBadge.svg" style={{ marginLeft: "50px" }} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;