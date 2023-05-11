export default {
    update_Detail: () => {( 
		editInvestorDetail.run(
        () =>
            getInvestorDetails.run(),											 
            showAlert('success เก่งมาก+💖+','success')), 
        () => 
            showAlert('Oh...No!!!!...error','error')
		)}
}