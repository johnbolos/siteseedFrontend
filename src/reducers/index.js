import { combineReducers } from "redux";
import layout from "./layout";
import global from "./global";
import templates from "./templates";
import editorHistory from "./editorHistory";
import editor from "./editor";
import pageReducer from "./pageReducer";
import { createHashHistory } from "history";
import { connectRouter } from "connected-react-router";
import undoable from "redux-undo";
const createHistory = createHashHistory;
export const history = createHistory();

export default combineReducers({
	layout,
	global,
	templates,
	editorHistory: undoable(editorHistory),
	editor,
	router: connectRouter(history),
	pageReducer,
});
