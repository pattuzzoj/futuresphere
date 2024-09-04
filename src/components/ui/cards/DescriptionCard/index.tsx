interface DescriptionCardProps {
  thumbnail: string;
  title: string;
  text: string;
}

function DescriptionCard(props: DescriptionCardProps) {
  return (
    <div class="grid md:grid-cols-2 gap-1 lg:gap-1.5 items-center max-w-5xl text-start">
      <img class="aspect-card object-cover rounded-3xl" src={props.thumbnail} alt="" loading='lazy' />
      <div class="flex flex-col justify-between gap-1">
        <h5>{props.title}</h5>
        <p class="text-xl">{props.text}</p>
      </div>
    </div>
  )
}

export default DescriptionCard;