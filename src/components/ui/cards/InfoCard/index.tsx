interface InfoCardProps {
  title: string;
  text: string;
  icon: string;
}

function InfoCard(props: InfoCardProps) {
  return (
    <div class="flex flex-col items-center gap-1.25 max-w-18">
      <img class="size-2 aspect-square" src={props.icon} alt="" loading='lazy' />
      <h5>{props.title}</h5>
      <p>{props.text}</p>
    </div>
  )
}

export default InfoCard;