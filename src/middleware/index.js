import { applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import logger from "redux-logger";

export default applyMiddleware(ReduxThunk, logger);
