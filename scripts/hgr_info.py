import csv
#replace with relevant files
csv_file = 'hgr_25_49.csv'
txt_file = 'hgr_25_49.txt'

#use utf-8 to avoid strange formatting
with open(csv_file, "r", encoding='utf-8-sig', newline='') as my_input_file:
    #iterate over each row in the CSV file and write it to the text file
    reader = csv.DictReader(my_input_file)
    header = reader.fieldnames

    with open(txt_file, "w", newline='') as my_output_file:
        for row in reader:
            #check if questbridge
            if row['College Name'] in ['Amherst College', 'Barnard College', 'Boston College', 'Boston University', 
                                       'Bowdoin College', 'Brown University', 'California Institute of Technology', 
                                       'Carleton College', 'Case Western Reserve University', 'Claremont McKenna College', 
                                       'Colby College', 'Colgate College', 'College of the Holy Cross', 'Colorado College', 
                                       'Columbia University', 'Cornell Univerity', 'Dartmouth College', 'Davidson University',
                                       'Denison University', 'Duke University', 'Emory University', 'Grinnell College', 'Hamilton College',
                                       'Haverford College', 'Johns Hopkins University', 'Macalester College', 'Massachussetts Institute of Technology',
                                        'Middlebury College', 'Northwestern University', 'Oberlin College', 'Pomona College',
                                        'Princeton University', 'Rice University', 'Scripps College', 'Skidmore College', 'Smith College',
                                        'Stanford University', 'Swarthmore College', 'Tufts University', 'University of Chicago',
                                        'University of Notre Dame', 'University of Pennsylvania', 'University of Southern California',
                                        'University of Virginia', 'Vanderbilt University', 'Vassar', 'Washington and Lee University', 'Washington University in St. Louis', 
                                        'Wellesley College', 'Wesleyan University', 'Williams College', 'Yale University']:

                for key, value in row.items(): 
                    #check to make sure there is a value
                    if value:
                        my_output_file.write(f"{row['College Name']} {key.upper()} {value}\n")
        