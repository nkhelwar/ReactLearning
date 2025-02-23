
const parent = React .createElement('div', {id: 'parent'},
    React.createElement('div', {id: 'c1'},
        [React.createElement('h1', null, 'H1 tag from c1'),
        React.createElement('h2', null, 'H2 tag from c1')]
    )
)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);

/**
 * <div id="parent">
 *      <div id = "c1">
 *          <h1>H1 tag from c1></h1>
 *          <h2>H2 tag from c1></h2>
 *          <h3>H3 tag from c1></h3>
 *      </div>
 * </div>
 * 
 * 
 * 
 * 
 */