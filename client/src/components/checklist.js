import { Component } from "react";
import { Grid, Cell } from "react-mdl";
import App from "../pages/App";

class Checklist extends Component {
    render() {
        return (
            <div style={{ width: "100%", margin: "auto" }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <div className="banner-text-checklist">
                            <h1>TODO</h1>
                            <App />
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Checklist;
