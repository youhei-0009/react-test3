import { CssModules } from './components/CssModules';
import { Emotion } from './components/Emotion';
import { InlineStyle } from './components/InlineStyle';
import { StyledComponents } from './components/StyledComponents';
import { StyledJsx } from './components/StyledJsx';
import './style.css';

export default function App() {
    return (
        <div className="App">
            <InlineStyle />
            <CssModules />
            <StyledJsx />
            <StyledComponents />
            <Emotion />
        </div>
    );
};