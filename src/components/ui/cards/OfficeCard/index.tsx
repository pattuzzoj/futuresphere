interface OfficeCardProps {
  thumbnail: string;
  text: string;
  city: string;
  number: string;
}

function OfficeCard(props: OfficeCardProps) {
  return (
    <div class="flex flex-col gap-0.5 text-start">
      <img class="rounded-2xl" src={props.thumbnail} alt="" />
      <div>
        <span class="text-purple">{props.city}</span>
        <p>{props.text}</p>
        <span class="dark:text-white">{props.number}</span>
      </div>
    </div>
  );
}
export default OfficeCard;