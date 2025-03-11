function Avatar({
  imageSrc = "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
}) {
  return (
    <div className="avatar">
      <div className="ring-info ring-offset-base-100 w-12 rounded-full ring ring-offset-2">
        <img src={imageSrc} alt="avatar image" />
      </div>
    </div>
  );
}

export default Avatar;
