import pandas as pd

class data_reader:

    def generate_pdf_links(database_path):
        data_file = pd.read_excel(database_path)

        output_links = ""
        data_values = data_file.sort_values(by = "name", ascending=False)


        for data in data_values.values:
            output_links += f"\t\t\t\t<li class=\"pdf_link\" onmousedown=\"load_pdf('{data[1]}')\">{data[0]}</li>\n"

        return output_links


    def inject_pdf_links(subject_file_path, output_html, unit = ""):
        target_file_read = open(subject_file_path, "r")
        injection = ""

        delete_mode = False
        if unit == "":
            for line in target_file_read.readlines():
                if "<!--Insert pdf links here-->" in line:
                    line += output_html
                    delete_mode = True

                elif "<!--End pdf links here-->" in line:
                    delete_mode = False


                elif delete_mode == True:
                    continue

                injection += line

        elif unit == "unit1":
            for line in target_file_read.readlines():
                if "<!--Insert u1 pdf links here-->" in line:
                    line += output_html
                    delete_mode = True

                elif "<!--End u1 pdf links here-->" in line:
                    delete_mode = False


                elif delete_mode == True:
                    continue

                injection += line

        else:
            for line in target_file_read.readlines():
                if "<!--Insert u2 pdf links here-->" in line:
                    line += output_html
                    delete_mode = True

                elif "<!--End u2 pdf links here-->" in line:
                    delete_mode = False


                elif delete_mode == True:
                    continue

                injection += line



        target_file_read.close()
        target_file_write = open(subject_file_path, "w")
        target_file_write.write(injection)
        target_file_write.close()
        