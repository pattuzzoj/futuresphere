import { Title, Meta } from '@solidjs/meta';

interface Props {
  title: string;
  description: string;
  keywords: string;
};

function MetaData(props: Props) {
  return (
  <>
    <Title>{props.title}</Title>
    <Meta name="og:title" content={props.title}/>
    <Meta name="twitter:title" content={props.title}/>
    <Meta name="description" content={props.description} />
    <Meta name="og:description" content={props.description} />
    <Meta name="twitter:description" content={props.description}/>
    <Meta name="keywords" content={props.keywords} />
  </>
  )
}

export default MetaData;