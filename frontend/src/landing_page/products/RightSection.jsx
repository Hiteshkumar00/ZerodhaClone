function RightSection({productName, productDesription, learnMore, imageURL}) {
  return (  
    <div className="row mt-5 p-5">
      <div className="col-md-6 mt-5 p-5">
        <h1>{productName}</h1>
        <p>{productDesription}</p>
        <div>
          <a href={learnMore}>Learn More <i class="fa fa-long-arrow-right" aria-hidden="true" /></a>  
        </div>
      </div>
      <div className="col-md-6 p-5 productImg">
        <img src={imageURL} />
      </div>
    </div>
  );
}

export default RightSection;