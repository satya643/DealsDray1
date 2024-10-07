// import { FETCH_EMPLOYEES, ADD_EMPLOYEE, EDIT_EMPLOYEE, DELETE_EMPLOYEE } from '../reducers/types';
//
// const initialState = {
//     employees: [],
// };
//
// const employeeReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case FETCH_EMPLOYEES:
//             return {
//                 ...state,
//                 employees: action.payload,
//             };
//         case ADD_EMPLOYEE:
//             return {
//                 ...state,
//                 employees: [...state.employees, action.payload],
//             };
//         case EDIT_EMPLOYEE:
//             return {
//                 ...state,
//                 employees: state.employees.map(employee =>
//                     employee.id === action.payload.id ? action.payload : employee
//                 ),
//             };
//         case DELETE_EMPLOYEE:
//             return {
//                 ...state,
//                 employees: state.employees.filter(employee => employee.id !== action.payload),
//             };
//         default:
//             return state;
//     }
// };
//
// export default employeeReducer;
