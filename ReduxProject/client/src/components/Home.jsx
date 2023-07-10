import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { action_Add_Wish, action_Get_wish, action_input, action_Remove_Wish } from '../store/actions/action';

const Home = (props) => {

    useEffect(() => {
        props.getWish()
    }, []);

    const list = props.myWishes.map((items) => {
        return <a className="collection-item" key={items._id}
            onClick={() => { props.DeleteWish(items._id) }}>{items.wish}</a>
    })

    return (
        <>
            <div>
                <form onSubmit={(e => { props.addWish(e) })}>
                    <input
                        type="text"
                        name="item"
                        value={props.text}
                        onChange={(e) => {
                            props.controlInput(e.target.value)
                        }}
                    />
                    <button type="submit" className="waves-effect waves-light btn">Add</button>
                </form>

                <div className="collection">
                    {list}
                </div>
            </div>

        </>
    )
}

const mapStateToProps = (state) => {
    return {
        text: state.text,
        myWishes: state.myWishes
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        controlInput: (input) => dispatch(action_input(input)),
        getWish: () => dispatch(action_Get_wish()),
        addWish: (e) => dispatch(action_Add_Wish(e)),
        DeleteWish: (e) => dispatch(action_Remove_Wish(e))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);