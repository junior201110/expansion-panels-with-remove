import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import IconButton from "@material-ui/core/IconButton";
import Clear from "@material-ui/icons/Clear";
const styles = theme => ({
    root: {
        width: "100%"
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: "33.33%",
        flexShrink: 0,
        alignSelf: "center"
    },
    secondaryHeading: {
        flex: `1`,
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary
    }
});

class ControlledExpansionPanels extends React.Component {
    state = {
        expanded: null
    };

    handleChange = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false
        });
    };

    render() {
        const { classes } = this.props;
        const { expanded } = this.state;

        return (
            <div className={classes.root}>
                <ExpansionPanel
                    expanded={expanded === "panel3"}
                    onChange={this.handleChange("panel3")}
                >
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className={classes.heading}>
                            Advanced settings
                        </Typography>
                        <Typography className={classes.secondaryHeading}>
                            <IconButton
                                style={{
                                    width: 30,
                                    height: 30,
                                    float: "right",
                                    padding: `0`
                                }}
                                onClick={e => {
                                    e.stopPropagation();
                                    alert("will remove");
                                }}
                            >
                                <Clear style={{ width: 20, height: 20 }} />
                            </IconButton>
                        </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                            Nunc vitae orci ultricies, auctor nunc in, volutpat
                            nisl. Integer sit amet egestas eros, vitae egestas
                            augue. Duis vel est augue.
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
        );
    }
}

ControlledExpansionPanels.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ControlledExpansionPanels);
