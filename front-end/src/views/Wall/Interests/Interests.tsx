import React from "react";
import {
    InterestsWrapper,
    InterestsWrap,
    InterestsName,
    InterestsAdd,
    InterestInput,
    InterestInputWrap,
    SaveWrap,
    Icon,
    Label
} from "./Interests.style";
import {
    loadInterestsAction,
    showAddInputAction,
    addInterestAction,
    hideAddInputAction
} from "../../../store/Wall/Interests/actions";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import * as images from "../../../img";
import { IInterestsStore } from "../../../models/interest/types";

type IInterestsProps = ReturnType<typeof mapStateToProps> &
    ReturnType<typeof mapDispatchToProps> & {};

interface IInterestsState {
    interestNameToAdd: string;
}

class Interests extends React.Component<IInterestsProps, IInterestsState>
{
    constructor(props: IInterestsProps) {
        super(props);
        this.state = {
            interestNameToAdd: ""
        }
    }

    componentDidMount() {
        this.props.loadInterests()
    }

    handleChangeName(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ interestNameToAdd: e.target.value });
    }

    addInterest() {
        if (!this.props.addInputVisible) {
            this.props.showAddInput();
        }
    }

    saveInterest() {
        const { interestNameToAdd } = this.state;
        this.props.addInterest(interestNameToAdd)
        this.props.hideAddInput()
    }

    showDialog() {
        return (<InterestInputWrap>
            <InterestInput onChange={this.handleChangeName.bind(this)}></InterestInput>
            <SaveWrap onClick={() => { this.saveInterest() }}>
                <Icon src={images.ok}></Icon>
            </SaveWrap>
        </InterestInputWrap>)
    }

    render() {
        const { arrayOfInterests } = this.props;
        return (
            <InterestsWrapper>
                {arrayOfInterests && <Label>Interests</Label>}
                <InterestsWrap>
                    {arrayOfInterests &&
                        arrayOfInterests.map(i => <InterestsName key={i.id}>
                            {i.name}
                        </InterestsName>)}
                    <InterestsAdd onClick={this.addInterest.bind(this)}>
                        {
                            !this.props.addInputVisible ? "+" : this.showDialog()
                        }
                    </InterestsAdd>
                </InterestsWrap>
            </InterestsWrapper>
        );
    }
}

const mapDispatchToProps = (dispatch: Dispatch) =>
    bindActionCreators(
        {
            loadInterests: loadInterestsAction,
            showAddInput: showAddInputAction,
            hideAddInput: hideAddInputAction,
            addInterest: addInterestAction,
        },
        dispatch
    );

const mapStateToProps = (state: IInterestsStore) => { return state; };

export default connect(mapStateToProps, mapDispatchToProps)(Interests);