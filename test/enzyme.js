const React = require('react');
const sinon = require('sinon');
const expect = require('expect');

import Todo from '../client/components/Todo';
import Input from '../client/components/Input';
import App from '../client/components/App';

import { shallow } from 'enzyme';

describe('React unit tests', () => {
  describe('<Todo />', () => {
    let wrapper;
    const spy = sinon.spy();

    before(() => {
      wrapper = shallow(<Todo key={0} todo={{ text: 'play a game', id: 0 }} removeTodo={spy} />);
    });

    it('Renders <li> with class "todo"', () => {
      expect(wrapper.type()).toEqual('li');
      expect(wrapper.props().className).toEqual('todo');
    });

    it('Clicking on the todo removes it from the DOM', () => {
      wrapper.find('.todo').simulate('click');
      expect(spy.calledOnce).toEqual(true);
    });
  });

  xdescribe('<Row />', () => {
    it('renders three squares', () => {
      const wrapper = render(<Row row={0} letters={['X', 'O', 'X']} handleClick={() => {}} />);
      expect(wrapper.find('.square').length).toEqual(3);
    });
  });

  xdescribe('GameList', () => {
    it('renders a <ul> with an <li> for every item in its gameList array prop', () => {
      const gameList = [{ winner: 'X', createdAt: '1' }, { winner: 'O', createdAt: '2' }];
      const wrapper = render(<GameList gameList={gameList} />);
      expect(wrapper.find('ul').length).toEqual(1);
      expect(wrapper.find('li').length).toEqual(2);
    });
  });

    xdescribe('<Row />', () => {
    it('renders three squares', () => {
      const wrapper = render(<Row row={0} letters={['X', 'O', 'X']} handleClick={() => {}} />);
      expect(wrapper.find('.square').length).toEqual(3);
    });
  });

  xdescribe('GameList', () => {
    it('renders a <ul> with an <li> for every item in its gameList array prop', () => {
      const gameList = [{ winner: 'X', createdAt: '1' }, { winner: 'O', createdAt: '2' }];
      const wrapper = render(<GameList gameList={gameList} />);
      expect(wrapper.find('ul').length).toEqual(1);
      expect(wrapper.find('li').length).toEqual(2);
    });
  });

    xdescribe('<Row />', () => {
    it('renders three squares', () => {
      const wrapper = render(<Row row={0} letters={['X', 'O', 'X']} handleClick={() => {}} />);
      expect(wrapper.find('.square').length).toEqual(3);
    });
  });

  xdescribe('GameList', () => {
    it('renders a <ul> with an <li> for every item in its gameList array prop', () => {
      const gameList = [{ winner: 'X', createdAt: '1' }, { winner: 'O', createdAt: '2' }];
      const wrapper = render(<GameList gameList={gameList} />);
      expect(wrapper.find('ul').length).toEqual(1);
      expect(wrapper.find('li').length).toEqual(2);
    });
  });

    xdescribe('<Row />', () => {
    it('renders three squares', () => {
      const wrapper = render(<Row row={0} letters={['X', 'O', 'X']} handleClick={() => {}} />);
      expect(wrapper.find('.square').length).toEqual(3);
    });
  });

  xdescribe('GameList', () => {
    it('renders a <ul> with an <li> for every item in its gameList array prop', () => {
      const gameList = [{ winner: 'X', createdAt: '1' }, { winner: 'O', createdAt: '2' }];
      const wrapper = render(<GameList gameList={gameList} />);
      expect(wrapper.find('ul').length).toEqual(1);
      expect(wrapper.find('li').length).toEqual(2);
    });
  });

    xdescribe('<Row />', () => {
    it('renders three squares', () => {
      const wrapper = render(<Row row={0} letters={['X', 'O', 'X']} handleClick={() => {}} />);
      expect(wrapper.find('.square').length).toEqual(3);
    });
  });

  xdescribe('GameList', () => {
    it('renders a <ul> with an <li> for every item in its gameList array prop', () => {
      const gameList = [{ winner: 'X', createdAt: '1' }, { winner: 'O', createdAt: '2' }];
      const wrapper = render(<GameList gameList={gameList} />);
      expect(wrapper.find('ul').length).toEqual(1);
      expect(wrapper.find('li').length).toEqual(2);
    });
  });

    xdescribe('<Row />', () => {
    it('renders three squares', () => {
      const wrapper = render(<Row row={0} letters={['X', 'O', 'X']} handleClick={() => {}} />);
      expect(wrapper.find('.square').length).toEqual(3);
    });
  });

  xdescribe('GameList', () => {
    it('renders a <ul> with an <li> for every item in its gameList array prop', () => {
      const gameList = [{ winner: 'X', createdAt: '1' }, { winner: 'O', createdAt: '2' }];
      const wrapper = render(<GameList gameList={gameList} />);
      expect(wrapper.find('ul').length).toEqual(1);
      expect(wrapper.find('li').length).toEqual(2);
    });
  });

    xdescribe('<Row />', () => {
    it('renders three squares', () => {
      const wrapper = render(<Row row={0} letters={['X', 'O', 'X']} handleClick={() => {}} />);
      expect(wrapper.find('.square').length).toEqual(3);
    });
  });

  xdescribe('GameList', () => {
    it('renders a <ul> with an <li> for every item in its gameList array prop', () => {
      const gameList = [{ winner: 'X', createdAt: '1' }, { winner: 'O', createdAt: '2' }];
      const wrapper = render(<GameList gameList={gameList} />);
      expect(wrapper.find('ul').length).toEqual(1);
      expect(wrapper.find('li').length).toEqual(2);
    });
  });

    xdescribe('<Row />', () => {
    it('renders three squares', () => {
      const wrapper = render(<Row row={0} letters={['X', 'O', 'X']} handleClick={() => {}} />);
      expect(wrapper.find('.square').length).toEqual(3);
    });
  });

  xdescribe('GameList', () => {
    it('renders a <ul> with an <li> for every item in its gameList array prop', () => {
      const gameList = [{ winner: 'X', createdAt: '1' }, { winner: 'O', createdAt: '2' }];
      const wrapper = render(<GameList gameList={gameList} />);
      expect(wrapper.find('ul').length).toEqual(1);
      expect(wrapper.find('li').length).toEqual(2);
    });
  });

    xdescribe('<Row />', () => {
    it('renders three squares', () => {
      const wrapper = render(<Row row={0} letters={['X', 'O', 'X']} handleClick={() => {}} />);
      expect(wrapper.find('.square').length).toEqual(3);
    });
  });

  xdescribe('GameList', () => {
    it('renders a <ul> with an <li> for every item in its gameList array prop', () => {
      const gameList = [{ winner: 'X', createdAt: '1' }, { winner: 'O', createdAt: '2' }];
      const wrapper = render(<GameList gameList={gameList} />);
      expect(wrapper.find('ul').length).toEqual(1);
      expect(wrapper.find('li').length).toEqual(2);
    });
  });

    xdescribe('<Row />', () => {
    it('renders three squares', () => {
      const wrapper = render(<Row row={0} letters={['X', 'O', 'X']} handleClick={() => {}} />);
      expect(wrapper.find('.square').length).toEqual(3);
    });
  });

  xdescribe('GameList', () => {
    it('renders a <ul> with an <li> for every item in its gameList array prop', () => {
      const gameList = [{ winner: 'X', createdAt: '1' }, { winner: 'O', createdAt: '2' }];
      const wrapper = render(<GameList gameList={gameList} />);
      expect(wrapper.find('ul').length).toEqual(1);
      expect(wrapper.find('li').length).toEqual(2);
    });
  });
});