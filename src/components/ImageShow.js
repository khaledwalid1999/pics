function ImageShow({ image }) {
  return (
    <div>
      <img src={image.alt} alt={image.img} />
    </div>
  );
}

export default ImageShow;
