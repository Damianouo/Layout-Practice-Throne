function Cards({ data }) {
  return (
    <div className="mx-auto flex aspect-[7/3] max-w-[1200px] flex-1 gap-4">
      {data.map((card) => (
        <div
          className="group skeleton relative flex-1 overflow-hidden transition-all hover:flex-[1.25_0_0]"
          key={card.id}
        >
          <img
            className="h-full w-full object-cover object-center"
            src={card.imageSrc}
            alt="card image"
          />
          <div className="prose relative left-8 transition-all group-hover:-translate-y-[calc(100%+32px)]">
            <p>Layout Typography</p>
            <p>Layout and Typography</p>
            {card.id === 3 && <p>Layout Typography</p>}
            <div className="absolute bottom-[calc(100%+20px)] left-0">
              <h3>Layout</h3>
              <h3>Layout and Typography</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
