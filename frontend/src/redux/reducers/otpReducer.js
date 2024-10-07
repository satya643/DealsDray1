// import { SEND_OTP, VERIFY_OTP, OTP_ERROR } from '../reducers/types';
//
// const initialState = {
//     otp: null,
//     verified: false,
//     error: null,
// };
//
// const otpReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case SEND_OTP:
//             return {
//                 ...state,
//                 otp: action.payload,
//                 error: null,
//             };
//         case VERIFY_OTP:
//             return {
//                 ...state,
//                 verified: action.payload,
//                 error: null,
//             };
//         case OTP_ERROR:
//             return {
//                 ...state,
//                 error: action.payload,
//             };
//         default:
//             return state;
//     }
// };
//
// export default otpReducer;
