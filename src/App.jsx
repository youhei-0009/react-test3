import { CssModules } from './components/CssModules';
import { InlineStyle } from './components/InlineStyle';
import { StyledJsx } from './components/StyledJsx';
import './style.css';

export default function App() {
    return (
        <div className="App">
            <InlineStyle />
            <CssModules />
            <StyledJsx />
        </div>
    );
};