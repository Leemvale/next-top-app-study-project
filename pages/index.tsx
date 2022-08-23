import { Htag, P, Tag } from '../components';
import { Button }  from '../components';

export default function Home() {
  return (
    <div>
      <Htag tag='h1'>Text</Htag>
      <Button appearance='primary'>Кнопка</Button>
      <Button appearance='ghost' arrow='right'>Кнопка</Button>

      <P size='l'>Большой</P>
      <P>Средний</P>
      <P size='s'>Маленький</P>

      <Tag>Ghost</Tag>
      <Tag color='red'>Red</Tag>
      <Tag color='gray'>Gray</Tag>
      <Tag color='green'>Green</Tag>
    </div>
  );
}
