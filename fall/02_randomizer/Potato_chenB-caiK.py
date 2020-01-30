#Brandon Chen
#SoftDev1 pd9
#K2 -- NO-body expects the Spanish Inquisition!/Randomizer/We imported random and used random.choice() to choose from all of the names.
#2019-09-12

import random
KREWES = {
	'orpheus': ['Emily', 'Kevin', 'Vishwaa', 'Eric', 'ray', 'Jesse', 'Tiffany', 'Amanda', 'Junhee', 'Jackie ', 'Tyler', 'Emory', 'Ivan', 'Elizabeth', 'Pratham', 'Shaw', 'Eric', 'Yaru', 'Kelvin', 'Hong Wei', 'Michael', 'Kiran', 'Amanda', 'Joseph', 'Tanzim', 'David', 'Yevgeniy'],
	'rex': ['William', 'Joseph', 'Calvin', 'Ethan', 'Moody', 'Mo', 'Big Mo', 'Peihua', 'Saad', 'Benjamin', 'Justin', 'Alice', 'Hilary', 'Ayham', 'Michael', 'Matthew', 'Jionghao', 'Devin ', 'David', 'Jacob', 'Will', 'Hannah', 'Alex'],
	'endymion': ['Grace', 'Nahi', 'Derek', 'Jun Tao', 'Connor', 'Jason', 'Tammy', 'Albert', 'Kazi', 'Derek', 'Brandon', 'Kenneth', 'Lauren', 'Biraj', 'Jeff', 'Jackson', 'Taejoon', 'Kevin', 'Jude', 'Sophie', 'Henry', 'Coby', 'Manfred', 'Leia', 'Ahmed', 'Winston']
}
def choseRandom(myCrews):
  totalData = []
  for period in myCrews.values():
    totalData += period
  print(random.choice(totalData))
choseRandom(KREWES)
