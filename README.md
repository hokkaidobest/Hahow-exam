Hahow-exam

第一題 :
1. 如何使用專案 :
	
	a. git clone 專案。

	b. 安裝 Node JS、Cypress。

	c. 使用 npx cypress open。

	d. cypress 視窗開啟後，點選 hahow/cypress/integration/interview-exam 資料夾。

	e. 執行 exam-1 ~ exam-3，執行結果可點選最終一筆 log，並開啟 chrome 的 F12 視窗，查看 console 內的結果。
	
第二題 :
1. 如何規劃測試流程融入團隊 ?

    a. 開發兩週、測試一週。
    
	b. 若 PM 會在開發週期開始前舉行需求功能說明，除 RD 外，QA 需參加，盡快理解需求及針對功能問處提出共同討論。
    
	c. 第一週 : QA 針對需求規格書，撰寫 test case，期間若有問題讓 PM、RD 知道，並於 test case 完成後讓 PM 確認，以便知道 PM、QA 對於功能理解是一致的。
    
	d. 第二週 : test case 撰寫完成後，可針對部分完成的功能先行測試，像是 API request、response，前端 UI 畫面等等。
    
	e. 第三週 : 根據 test case 測試功能，若有問題，需盡快讓 RD 協助修正，待複測完後通知 PM，若 PM 驗收無誤，則該項目可安排上線。
    
	f. 功能上線 : 上線後進行複測，並觀察 log、Sentry 有無異常狀況，若有，需盡快重現並讓 RD 同仁修正。

2. 如何規劃 test case 設計 ?
    
	a. 新功能正向流程。
    
	b. 新功能反向流程。
    
	c. 新功能極端流程。
    
	d. 因此新功能會被影響到的舊功能，需確認操作正常沒有受到影響。

3. 如何回報 bug ?
    
	a. test case 定義 bug 嚴重程度，若 bug 造成測試主流程無法進行，直接回報給 RD。
    
	b. 若無上述情形，則第一輪測試完成後，再交由相對應 RD 修正各功能，可利用工具 tag 需處理該項目的 RD。

4. 發布版本的驗收標準 ?
    
	a. 以 PM 的需求規格書為標準。
    
	b. QA 以 test case 為標準確認功能是否符合需求。
    
	c. 測試完成後告知 PM 測試情況，若 PM 有覺得需調整之處，再和 RD 討論。

5. 如何和團隊回報測試結果 ?
    
	a. 大項目需讓全團隊成員 (PM、RD、QA) 知道測試、修正等等的情況，可透過 test case 讓團隊成員知道有哪些項目被測試，哪些問題需要被修正。
    
	b. 小項目需告知 PM、該項目開發 RD、QA，可用簡易的 Trello 或者是 excel 工具紀錄測試項目。
