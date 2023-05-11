export default {
    delete_InvestorDetail: () => {(
				deleteInvestorDetail.run(
						() => 
						getInvestorDetails.run(),
						showAlert('Deleted row successfully!','success'), 
						() => 
						showAlert('Oh...No!!!!...error','error'))
				)}
}