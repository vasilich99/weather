import { useMemo, useRef } from 'react';
import classNames from 'classnames';
import useDragNDrop from '../../hooks/dragNdrop';
import Icon from '../icon/icon';
import './small-card.scss';
import { City, Weather } from '../../types';

interface Props {
  city: City;
  draggable: HTMLElement | null;
  onChangeDraggable: (param: HTMLElement | null) => void;
  favourites: City[];
  weather?: Weather;
  onChangeFavourites: (cities: City[]) => void;
}

const SmallCard = (props: Props) => {
  const card = useRef<HTMLDivElement>(null);
  useDragNDrop({
    draggable: props.draggable,
    onChangeDraggable: props.onChangeDraggable,
    city: props.city,
    favourites: props.favourites,
    onChangeFavourites: props.onChangeFavourites,
    card: card.current,
    type: 'small-card',
  });

  const temp = useMemo(() => {
    const temperature = props.weather?.temp;
    return temperature && temperature > 0 ? `+${temperature}` : temperature;
  }, [props.weather]);

  return (
    <div
      className={classNames('small-card', {
        'small-card_draggable': props.draggable === card.current,
      })}
      ref={card}
    >
      <span className="small-card__city">{props.city.name}</span>
      <span className="small-card__temperature">{temp}°</span>
      <Icon name="strips-small" />
    </div>
  );
};

export default SmallCard;
