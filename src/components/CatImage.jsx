export default function CatImage ({cat}) {

    return (
      <>
        <div className="cat-image-div ">
          <img src={cat} alt="" />
        </div>
      </>
    );

}