module.exports = async function (context, myTimer) {    
    if (myTimer.isPastDue) {
        context.log('Skipping overdue invocation.');
        return;
    }

    throw "ERROR";
};