import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => (
  <label>
    <input type="text" value={value} onChange={onChange} />
  </label>
);
export default Filter;

Filter.propeTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};


// export class Filter extends Component {
//   state = {
//     filter: '',
//   };

//   render() {
//     const { name } = this.state;
//     return (
//       <div>
//         <Filter
//           onChange={e => this.setState({ filter: e.target.value })}
//           value={this.state.filter}
//         />
//       </div>
//     );
//   }
// }

// function Filter({ onChange }) {
//   return <input type="text" onChange={onChange} value={value} />;
// }
