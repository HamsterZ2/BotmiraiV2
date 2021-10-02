
module.exports = function ({models, api}) {

	const Threads = models.use ('Chủ đề');

	hàm async getInfo (threadID) {

		cố gắng {

			const result = await api.getThreadInfo (threadID);

			trả về kết quả;

		}

		bắt (lỗi) { 

			console.log (lỗi);

			ném Error (lỗi) mới;

		};

	}

	hàm async getAll (... dữ liệu) {

		var where, thuộc tính;

		for (const i of data) {

			if (typeof i! = 'object') throw global.getText ("thread", "needObjectOrArray");

			if (Array.isArray (i)) thuộc tính = i;

			khác ở đâu = i;

		}

		thử {return (chờ Threads.findAll ({ở đâu, thuộc tính})). map (e => e.get ({trơn: true})); }

		bắt (lỗi) {

			console.error (lỗi);

			ném Error (lỗi) mới;

		}

}

	hàm async getData (threadID) {

		cố gắng {

			const data = await Threads.findOne ({trong đó: {threadID}});

			if (data) return data.get ({trơn: true});

			khác trả về false;

		} 

		bắt (lỗi) { 

			console.error (lỗi);

            ném Error (lỗi) mới;

		}

	}

	async function setData (threadID, options = {}) {

		if (typeof options! = 'object' &&! Array.isArray (options)) ném global.getText ("thread", "needObject");

		cố gắng {

			(đang chờ Threads.findOne ({where: {threadID}})). update (tùy chọn);

			trả về true;

		} catch (error) { 

			cố gắng{

				chờ this.createData (threadID, các tùy chọn);

			} catch (error) {

				console.error (lỗi);

				ném Error (lỗi) mới;

			}

			

		}

	}

	hàm async delData (threadID) {

		cố gắng {

			(đang chờ Threads.findOne ({where: {threadID}})). tiêu diệt ();

			trả về true;

		}

		bắt (lỗi) {

			console.error (lỗi);

			ném Error (lỗi) mới;

		}

	}

	async function createData (threadID, defaults = {}) {

		if (typeof defaults! = 'object' &&! Array.isArray (defaults)) ném global.getText ("thread", "needObject");

		cố gắng {

			chờ đợi Threads.findOrCreate ({where: {threadID}, defaults});

			trả về true;

		}

		chụp lấy {

			console.error (lỗi);

			ném Error (lỗi) mới;

		}

	}

	trở lại {

		nhận thông tin,

		lấy hết,

		lấy dữ liệu,

		setData,

		delData,

		createData

	};

};
