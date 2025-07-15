#!/usr/bin/env python3
import csv
import json
import re
from collections import defaultdict

# Read the CSV file
csv_file_path = '/Users/derekblank/Downloads/Tools Database - Database for web (3).csv'
json_file_path = '/Users/derekblank/Code/heaps-smart/src/app/tools-for-nonprofits/tool-categories-full.json'

# Load existing JSON data
with open(json_file_path, 'r') as f:
    existing_data = json.load(f)

# Create a dictionary to organize tools by category
tools_by_category = defaultdict(list)

# Function to clean and format strings
def clean_string(s):
    if not s or s.strip() == '':
        return ""
    return s.strip()

# Function to create slug from tool name
def create_slug(name):
    if not name:
        return ""
    # Convert to lowercase, replace spaces with hyphens, remove special chars
    slug = re.sub(r'[^\w\s-]', '', name.lower())
    slug = re.sub(r'[\s_-]+', '-', slug)
    return slug.strip('-')

# Function to map pricing symbols to description
def map_pricing_tier(pricing_symbol):
    pricing_map = {
        '$': '$',
        '$$': '$$', 
        '$$$': '$$$',
        '$$$$': '$$$$'
    }
    return pricing_map.get(pricing_symbol, '$')

# Function to determine tags based on category
def get_tags_from_category(category):
    if not category:
        return ["Other"]
    
    # Handle multiple categories separated by semicolon
    categories = [cat.strip() for cat in category.split(';')]
    tags = []
    
    for cat in categories:
        if 'Password Management' in cat:
            tags.append('Security')
        elif 'Data Management' in cat:
            tags.append('Database')
        elif 'Project Management' in cat:
            tags.append('Project Management')
        elif 'Design' in cat:
            tags.append('Design')
        elif 'Social Media Management' in cat:
            tags.append('Marketing')
        elif 'AI-Assistant' in cat:
            tags.append('AI')
        elif 'Fundraising' in cat:
            tags.append('Fundraising')
        elif 'CRM' in cat:
            tags.append('CRM')
        elif 'Website Builder' in cat:
            tags.append('Website Builder')
        elif 'Mapping' in cat:
            tags.append('Mapping')
        elif 'Communication' in cat:
            tags.append('Communication')
        elif 'Form Builder' in cat:
            tags.append('Form Builder')
        elif 'Knowledge Management' in cat:
            tags.append('Cloud Storage')
        elif 'Event Management' in cat:
            tags.append('Events')
        elif 'Email Management' in cat:
            tags.append('Marketing')
        elif 'Transcription' in cat:
            tags.append('Transcription')
        elif 'Content Management' in cat:
            tags.append('Content Management')
        elif 'Payments' in cat:
            tags.append('Payments')
        elif 'Data Visualisation' in cat:
            tags.append('Data')
        elif 'Video Hosting' in cat:
            tags.append('Video Hosting')
        elif 'Website CMS' in cat:
            tags.append('Website CMS')
        elif 'Automation' in cat:
            tags.append('Automation')
        elif 'Collaboration' in cat:
            tags.append('Collaboration')
        else:
            tags.append(cat)
    
    return tags if tags else ["Other"]

# Read and process CSV data
with open(csv_file_path, 'r', encoding='utf-8') as csvfile:
    reader = csv.DictReader(csvfile)
    
    for row in reader:
        tool_name = clean_string(row.get('Tool', ''))
        if not tool_name:
            continue
            
        category = clean_string(row.get('Category', ''))
        website = clean_string(row.get('Website', ''))
        description = clean_string(row.get('Description', ''))
        monthly_pricing_aud = clean_string(row.get('Monthly Pricing (AUD)', ''))
        pricing_tier = clean_string(row.get('Pricing', ''))
        non_profit_discount = clean_string(row.get('Non Profit Discount', ''))
        non_profit_pricing_url = clean_string(row.get('Non Profit Pricing', ''))
        pricing_details = clean_string(row.get('Pricing / Discount - Details', ''))
        hs_recommended = clean_string(row.get('HS Recommended?', ''))
        hs_recommended_details = clean_string(row.get('HS Recommended - Details', ''))
        affiliate_link = clean_string(row.get('Affiliate LInk - "View Website"', ''))
        
        # Create tool object
        tool = {
            "name": tool_name,
            "description": description,
            "image": "/assets/svg/data-infrastructure.svg",  # Default image
            "link": affiliate_link if affiliate_link and affiliate_link.startswith('http') else "",
            "tags": get_tags_from_category(category),
            "pricing": f"Yes - {non_profit_discount}" if non_profit_discount and non_profit_discount.lower() != 'no' else "No",
            "raw_pricing": map_pricing_tier(pricing_tier),
            "monthly_pricing_aud": monthly_pricing_aud if monthly_pricing_aud and monthly_pricing_aud != '$' else "",
            "non_profit_discount_view": non_profit_pricing_url,
            "non_profit_discount": non_profit_discount,
            "hs_recommended": hs_recommended,
            "hs_recommended_details": hs_recommended_details,
            "pricing_details": pricing_details,
            "original_website": f"https://{website}" if website and not website.startswith('http') else website,
            "affiliate_link": affiliate_link if affiliate_link and affiliate_link.startswith('http') else "",
            "slug": create_slug(tool_name)
        }
        
        # Determine primary category for grouping
        primary_category = category.split(';')[0].strip() if category else "Other"
        
        # Map some categories to match existing structure
        if 'Password Management' in primary_category:
            primary_category = 'Security'
        elif 'Data Management' in primary_category:
            primary_category = 'Database'
        elif 'AI-Assistant' in primary_category:
            primary_category = 'AI'
        elif 'Social Media Management' in primary_category:
            primary_category = 'Marketing'
        elif 'Email Management' in primary_category:
            primary_category = 'Marketing'
        elif 'Website Builder' in primary_category:
            primary_category = 'Website Builder'
        elif 'Knowledge Management' in primary_category:
            primary_category = 'Cloud Storage'
        elif 'Event Management' in primary_category:
            primary_category = 'Events'
        elif 'Data Visualisation' in primary_category:
            primary_category = 'Data'
        elif 'Video Hosting' in primary_category:
            primary_category = 'Video Hosting'
        elif 'Website CMS' in primary_category:
            primary_category = 'Website CMS'
            
        tools_by_category[primary_category].append(tool)

# Create new structure - preserve existing data and add new tools
final_data = []

# Create a set of existing tool names to avoid duplicates
existing_tool_names = set()
existing_categories = {}

for category in existing_data:
    category_name = category['name']
    existing_categories[category_name] = category
    for tool in category['tools']:
        existing_tool_names.add(tool['name'].lower())

# Add tools from CSV, avoiding duplicates
for category_name, tools in tools_by_category.items():
    if category_name in existing_categories:
        # Add to existing category, avoiding duplicates
        existing_category = existing_categories[category_name]
        for tool in tools:
            if tool['name'].lower() not in existing_tool_names:
                existing_category['tools'].append(tool)
                existing_tool_names.add(tool['name'].lower())
    else:
        # Create new category
        new_category = {
            "name": category_name,
            "description": f"Tools tagged under {category_name}",
            "tools": [tool for tool in tools if tool['name'].lower() not in existing_tool_names]
        }
        if new_category['tools']:  # Only add if there are tools
            existing_categories[category_name] = new_category

# Convert back to list format
final_data = list(existing_categories.values())

# Sort categories alphabetically
final_data.sort(key=lambda x: x['name'])

# Write the updated JSON
with open(json_file_path, 'w', encoding='utf-8') as f:
    json.dump(final_data, f, indent=2, ensure_ascii=False)

print(f"Successfully merged CSV data into {json_file_path}")
print(f"Total categories: {len(final_data)}")
total_tools = sum(len(cat['tools']) for cat in final_data)
print(f"Total tools: {total_tools}")
