import React from 'react';
import './MovesList.scss';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return { userMoves: state.userMoves };
};
const connectedMoveList = ({ userMoves }) => {
    return (
        <div className={!userMoves.length? 'no-moves':'moves-list'}>
            <h1>your last {!userMoves.length ? '' :userMoves.length} moves:</h1>
            {!userMoves.length ?
                <h1>No moves yet</h1> :
                userMoves.map((move, idx) => {
                    return (
                        <ul key={idx}>
                            <li>To: {move.to}</li>
                            <li>At: {move.at}</li>
                            <li>Status:<span> Approved</span></li>
                            <li>Amount: {move.amount} BTC</li>
                        </ul>
                    )
                })}
        </div>
    )
}

const MovesList = connect(mapStateToProps)(connectedMoveList);
export default MovesList;