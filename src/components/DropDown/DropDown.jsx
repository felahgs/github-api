import React, { Component } from 'react';

https://blog.campvanilla.com/reactjs-dropdown-menus-b6e06ae3a8fe

class Card extends Component {
  constructor() {
    super();
    
    this.state = {
      showMenu: false,
    }
  }

  render() {
    return (
      <div>
        <button>
          Show menu
        </button>
        
        {
          this.state.showMenu
            ? (
              <div className="menu">
                <button> Menu item 1 </button>
                <button> Menu item 2 </button>
                <button> Menu item 3 </button>
              </div>
            )
            : (
              null
            )
        }
      </div>
    );
  }
}