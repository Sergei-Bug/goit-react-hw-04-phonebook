import PropTypes from 'prop-types';

import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Button, Item } from './ListContact.styled';

const ListItem = ({ data, filter, handleDeleteContact }) => {
  return (
    <TransitionGroup className="list">
      {filter !== ' '
        ? data
            .filter((el, index) =>
              el.name.toLowerCase().includes(filter.toLowerCase())
            )
            .map(({ id, name, number }) => (
              <CSSTransition key={id} timeout={500} classNames="item">
                <Item>
                  {name}: {number}
                  <Button
                    type="button"
                    onClick={() => {
                      handleDeleteContact(id);
                    }}
                    aria-label="button for delite a contact"
                  >
                    Delete
                  </Button>
                </Item>
              </CSSTransition>
            ))
        : data.map(({ id, name, number }) => (
            <CSSTransition key={id} timeout={500} classNames="item">
              {' '}
              <Item>
                {name}: {number}{' '}
                <Button type="button" aria-label="button for delite a contact">
                  Delete
                </Button>
              </Item>
            </CSSTransition>
          ))}
    </TransitionGroup>
  );
};
export default ListItem;
ListItem.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  filter: PropTypes.string.isRequired,
  handleDeleteContact: PropTypes.func,
};
