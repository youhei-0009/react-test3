import { CssModules } from './components/CssModules';
import { InlineStyle } from './components/InlineStyle';
import './style.css';

export default function App() {
    return (
        <div className="App">
            <InlineStyle />
            <CssModules />
        </div>
    );
};