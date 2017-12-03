import {HIDE_MESSAGE, VISIBLE_MESSAGE} from "../../constants/admin/index";

export function hideAdminMessage() {
    return {
        type: HIDE_MESSAGE,
    }
}

export function visibleAdminMessage(message) {
    return {
        type: VISIBLE_MESSAGE,
        message,
    }
}
