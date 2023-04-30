from database_reader import data_reader as dr
import os

exam = input ("Would you like to edit a csec or cape file? ")
unit = ""
if exam == "cape":
    unit = input ("Would you like to edit unit1 or unit2? ")


print()

x=0
while x < 10:
    print(os.listdir(f"{exam}\\database"))
    database_path = f"{exam}\\database\\" +input("\nSelect a database file: ")

    links = dr.generate_pdf_links(database_path)

    print()
    print(os.listdir(exam))
    edit_file_path = exam + "\\" +input("\nSelect a file to be edited: ")
    dr.inject_pdf_links(edit_file_path, links, unit)

    print("\nTask completed successfully.")
    print('-' * 20)
    print()

